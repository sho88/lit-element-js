import { decorator } from './util';
import { UserService } from './user.service';
import { template } from './application.template';

const Component = decorator({
  view: template,
  services: [UserService],
  dependencies: [],
  events: [{ name: 'title-click', bubbles: true }],
})
export class ApplicationComponent extends Component {
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
      error => console.error(error),
    );
  }

  // events go here -----------------------------------------------------------

  onClick() {
    this.emit('title-click', this.title);

    // demonstration purposes, this event will not emit
    this.emit('something-random', { name: 'James Doe' });
  }
}
customElements.define('application-component', ApplicationComponent);
