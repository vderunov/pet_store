import ModelSearch from './modelSearch.js';
import ViewSearch from './viewSearch.js';

export default class ControllerSearch {
  constructor() {
    this.model = new ModelSearch();
    this.view = new ViewSearch();
    this.showNavSearch();
    this.view.addEventForActivateSearch(this.contrActivateSearch.bind(this));
  }

  showNavSearch() {
    this.view.render(this.sortByInput.bind(this));
  }

  contrActivateSearch(event) {
    const { pet } = event.target.dataset;

    if (pet === 'cats' || pet === 'dogs' || pet === 'fish' || pet === 'birds') {
      this.view.activateSearch();
    }
  }

  sortByInput(event) {
    this.view.renderCollection(this.model.makeSortByInput(event.target.value));
  }
}
