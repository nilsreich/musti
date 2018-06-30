import {LitElement, html} from '@polymer/lit-element';

import {Button} from "@material/mwc-button";

// This element is connected to the Redux store.
import { store } from './store.js';

// These are the actions needed by this element.
import { increment, decrement } from './counter_action';

// We are lazy loading its reducer.
import counter from './counter_reducer.js';
store.addReducers({
  counter
});

// These are the elements needed by this element.



class MyElement extends LitElement {

  // Render method should return a `TemplateResult` using the provided lit-html `html` tag function
  _render(props) {
    return html`
    Clicked: <span>${props.clicks}</span> times.

<mwc-button on-click="${() => this._onIncrement()}">mehr</mwc-button>
    `;
  }


  static get properties() { return {
    // This is the data from the store.
    clicks: Number
  }};
  constructor() {
    super();
    this.clicks = 0
  }
  _onIncrement() {
    this.clicks++;
    store.dispatch(increment());
  }

    // This is called every time something is updated in the store.
    _stateChanged(state) {
        this.clicks = state.counter.clicks;
      }
    }

customElements.define('my-element', MyElement);







if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}