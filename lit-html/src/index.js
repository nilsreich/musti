import {html, render} from '../node_modules/lit-html/lib/lit-extended.js';
import {jo} from './test.js';
let bla = jo(3,4);
console.log(bla);
const header = html`<h1>Header</h1>`;

const page = html`
  ${header}
  <p>This is some text</p>
`;

render(page, document.body);