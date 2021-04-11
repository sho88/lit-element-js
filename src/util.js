import { LitElement } from 'lit-element';

export function decorator({ events, services, view }) {
  return class extends LitElement {
    constructor() {
      super();
      if (events && Array.isArray(events)) {
        this.eventsList = [...events];
      }

      services.forEach(service => {
        const serviceName = `${service.name.substring(0, 1).toLowerCase()}${service.name.substring(1)}`;
        this[serviceName] = new service();
      });
    }

    render() {
      return view(this);
    }

    emit(name, detail, bubbles = false) {
      const find = this.eventsList.find(event => event.name === name);
      if (!find) {
        throw new Error(`Event name "${name}" cannot be emitted.`);
      }

      this.dispatchEvent(new CustomEvent(name, { detail, bubbles, composed: bubbles }));
    }
  }
}
