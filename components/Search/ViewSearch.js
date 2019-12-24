import Templater from '../../src/templater.js';

export default class ViewSearch {
  constructor() {
    this.templater = new Templater('./components/search/search.html');
    this.templaterProd = new Templater('./components/search/product.html');
  }

  addEventForActivateSearch(contrActivateSearch) {
    document
      .querySelector('#root-category')
      .addEventListener('click', contrActivateSearch);
  }

  activateSearch() {
    const search = document.querySelector('#search');
    search.removeAttribute('disabled');
    search.style.background = 'lightgreen';
  }

  render(sortByInput) {
    this.templater.load(
      null,
      document.querySelector('#root-search'),
      ['#search'],
      'input',
      sortByInput
    );
  }

  renderCollection(data) {
    const goods = document.querySelector('#root-goods');
    goods.innerHTML = '';
    data.forEach(elem => {
      this.templaterProd.load(elem, goods);
    });
  }
}
