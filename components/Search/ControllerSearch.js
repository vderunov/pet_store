import ModelSearch from './ModelSearch.js';
import ViewSearch from './ViewSearch.js';

export default class ControllerSearch {
  constructor(router) {
    this.router = router.controllerProduct.showAllGoods.bind(
      router.controllerProduct
    );
    this.model = new ModelSearch(this);
    this.view = new ViewSearch(this);
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
    this.router(collectionPet);
  }
}
