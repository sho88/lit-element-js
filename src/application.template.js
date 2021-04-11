import { html } from "lit-html";

export const template = ctrl => {
  return html`
    <div>
      <h1 @click="${ctrl.onClick}">Hello ${ctrl.title}</h1>
      <pre>${JSON.stringify(ctrl.users, null, 2)}</pre>
    </div>
  `;
};
