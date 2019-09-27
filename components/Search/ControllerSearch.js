import ModelSearch from './ModelSearch.js';
import ViewSearch from './ViewSearch.js';
import { ControllerProduct } from '../../App/main.js';

export default class ControllerSearch {
  constructor() {
    this.model = new ModelSearch(this);
    this.view = new ViewSearch(this);
    this.ControllerProduct = new ControllerProduct();
    this.showNavSearch();
  }

  showNavSearch() {
    this.view.render();
    this.view.addEventOnSearch();
  }

  sortByInput(e) {
    this.model.makeSortByInput(e.target.value);
  }

  showSortByInput(collectionPet) {
    this.ControllerProduct.showAllGoods(collectionPet);
  }
}
