import { LitElement, html } from "lit-element";
import { decorator } from './util';
import { UserService } from './user.service';

const services = [UserService];
const events = [
  { name: 'title-click', bubbles: true }
]
export class ApplicationComponent extends decorator(LitElement, services, events) {
  static get properties() {
    return {
      title: { type: String },
      users: { type: Array }
    };
  }

  constructor() {
    super();
    this.userService.getUsers().then(
      users => this.users = [...users],
      error => console.error(error)
    );
  }

  render() {
    return html`
      <div>
        <h1 @click="${this.onClick}">Hello ${this.title}</h1>
        <pre>${JSON.stringify(this.users, null, 2)}</pre>
      </div>
    `;
  }

  // events go here -----------------------------------------------------------

  onClick() {
    this.emit('title-click', this.title);

    // demonstration purposes, this event will not emit
    this.emit('something-random', { name: 'James Doe' });
  }
}
customElements.define('application-component', ApplicationComponent);
