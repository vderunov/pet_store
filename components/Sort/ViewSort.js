import Templater from '../../src/templater.js';

export default class ViewSort {
  constructor() {
    this.templater = new Templater('./components/sort/sort.html');
    this.templaterCollection = new Templater('./components/sort/product.html');
  }

  render(sortBy) {
    this.templater.load(
      null,
      document.querySelector('#root-sort'),
      ['[data-btn="up"]', '[data-btn="down"]', '[data-btn="quantity"]'],
      'click',
      sortBy
    );
  }

  renderSortCollection(data) {
    const goods = document.querySelector('#root-goods');
    goods.innerHTML = '';
    data.forEach(elem => {
      this.templaterCollection.load(elem, goods);
    });
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

  delCheckboxFromPage() {
    document.querySelector('#checkbox').innerHTML = '';
  }

  addEventOnNav(getProps, getGoodsByProp) {
    document
      .querySelector('#root-category')
      .addEventListener('click', getProps);
    document
      .querySelector('#root-sort')
      .addEventListener('change', getGoodsByProp);
  }
}
