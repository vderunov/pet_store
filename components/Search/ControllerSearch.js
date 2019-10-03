import ModelSearch from './modelSearch.js';
import ViewSearch from './viewSearch.js';

export default class ControllerSearch {
  constructor(router) {
    this.routerShowGoods = router.controllerProduct.showAllGoods.bind(
      router.controllerProduct
    );
    this.model = new ModelSearch(this);
    this.view = new ViewSearch(this);
    this.showNavSearch();
    this.init();
  }

  init() {
    this.view.addEventForActivateSearch();
  }

  showNavSearch() {
    this.view.render();
  }

  contrActivateSearch(event) {
    const { pet } = event.target.dataset;

    if (pet === 'cats' || pet === 'dogs' || pet === 'fish' || pet === 'birds') {
      this.view.activateSearch();
    }
  }

  sortByInput(e) {
    this.model.makeSortByInput(e.target.value);
  }

  showSortByInput(collectionPet) {
    this.routerShowGoods(collectionPet);
  }
}
