import ModelSearch from './modelSearch.js';
import ViewSearch from './viewSearch.js';

export default class ControllerSearch {
  constructor(router) {
    this.routerShowGoods = router.controllerProduct.showAllGoods.bind(
      router.controllerProduct
    );
    this.model = new ModelSearch();
    this.view = new ViewSearch();
    this.showNavSearch();
    this.init();
  }

  init() {
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

  sortByInput(e) {
    this.model.makeSortByInput(e.target.value, this.showSortByInput.bind(this));
  }

  showSortByInput(collectionPet) {
    this.routerShowGoods(collectionPet);
  }
}
