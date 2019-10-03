import Templater from '/../src/templater.js';

export default class ViewSort {
  constructor(contr) {
    this.controller = contr;
    this.templater = new Templater('../components/Sort/sort.html');
    // this.templater1 = new Templater('../components/Sort/sortCheckbox.html');
  }

  render() {
    this.templater.load(
      null,
      document.querySelector('#root-sort'),
      ['[data-btn="up"]', '[data-btn="down"]', '[data-btn="quantity"]'],
      'click',
      this.controller.sortBy.bind(this.controller)
    );
  }

  renderCheckbox(obj) {
    let str = '';
    for (const key in obj) {
      str += `<div class="uk-padding-small"><p>${key.toUpperCase()}:`;
      obj[key].forEach(e => {
        str += `
        <label class="uk-margin-left"> / <input class="uk-checkbox uk-margin-right" type="checkbox" data-${key}="${e}" />${e}</label>`;
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
      .querySelector('#root-category')
      .addEventListener(
        'click',
        this.controller.getProps.bind(this.controller)
      );
    document
      .querySelector('#root-sort')
      .addEventListener(
        'change',
        this.controller.getGoodsByProp.bind(this.controller)
      );
  }
}
