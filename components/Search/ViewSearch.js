import Templater from '/../src/templater.js';

export default class ViewSearch {
  constructor(contr) {
    this.templater = new Templater('../components/Search/search.html');
    this.controller = contr;
    this.rootCategory = document.querySelector('#root-category');
  }

  addEventForActivateSearch() {
    this.rootCategory.addEventListener(
      'click',
      this.controller.contrActivateSearch.bind(this.controller)
    );
  }

  activateSearch() {
    const search = document.querySelector('#search');
    search.removeAttribute('disabled');
    search.style.background = 'lightgreen';
  }

  render() {
    this.templater.load(
      null,
      document.querySelector('#root-search'),
      ['#search'],
      'input',
      this.controller.sortByInput.bind(this.controller)
    );
  }
}
