import Templater from '../../src/templater.js';

export default class ViewSearch {
  constructor() {
    this.templater = new Templater('../components/search/search.html');
    this.rootCategory = document.querySelector('#root-category');
  }

  addEventForActivateSearch(contrActivateSearch) {
    this.rootCategory.addEventListener('click', contrActivateSearch);
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
}
