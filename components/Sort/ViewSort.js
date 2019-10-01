// import Templater from '../../src/Templater.js';

export default class ViewSort {
  constructor(contr) {
    this.controller = contr;
    // this.templater = new Templater('../components/Sort/Sort.html');
  }

  render() {
    document.querySelector('#sort').innerHTML = `
    <button class="uk-button uk-button-default uk-button-small uk-margin-small-left" data-btn="up">price increase</button>
    <button class="uk-button uk-button-default uk-button-small" data-btn="down">price decrease</button>
    <button class="uk-button uk-button-default uk-button-small" data-btn="quantity">quantity switching</button>
    <button class="uk-button uk-button-default uk-button-small uk-button-primary updateStock" ">Update product availability</button>
    <div id="checkbox" class="uk-margin-left uk-grid-small uk-child-width-auto uk-grid"></div>
  </div>
    `;
  }

  renderCheckbox(obj) {
    let str = '';
    for (const key in obj) {
      str += `<div><p>${key}`;
      obj[key].forEach(e => {
        str += `
        <label class="uk-margin-left"><input class="uk-checkbox uk-margin-right" type="checkbox" data-${key}="${e}" />${e}</label>`;
      });
      str += `</p></div>`;
      document.querySelector('#checkbox').innerHTML = str;
    }
  }

  delCheckboxFromPage(obj) {
    document.querySelector('#checkbox').innerHTML = '';
  }

  addEventOnNav() {
    document
      .querySelector('[data-btn="up"]')
      .addEventListener('click', this.controller.sortBy.bind(this.controller));
    document
      .querySelector('[data-btn="down"]')
      .addEventListener('click', this.controller.sortBy.bind(this.controller));
    document
      .querySelector('[data-btn="quantity"]')
      .addEventListener('click', this.controller.sortBy.bind(this.controller));
    document
      .querySelector('#category')
      .addEventListener(
        'click',
        this.controller.getProps.bind(this.controller)
      );
    document
      .querySelector('#sort')
      .addEventListener(
        'change',
        this.controller.getGoodsByProp.bind(this.controller)
      );
  }
}
