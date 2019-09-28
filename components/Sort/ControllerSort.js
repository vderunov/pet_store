import ModelSort from './ModelSort.js';
import ViewSort from './ViewSort.js';

export default class ControllerSort {
  constructor(router) {
    this.routerActiveCase = router.controllerProduct.getActiveCase.bind(
      router.controllerProduct
    );
    this.routerShowSorterGoods = router.controllerProduct.showAllGoods.bind(
      router.controllerProduct
    );
    this.view = new ViewSort(this);
    this.model = new ModelSort(this);
    this.init();
  }

  init() {
    this.view.render();
    this.view.addEventOnNav();
  }

  sortBy(event) {
    const data = this.routerActiveCase();
    if (event.target.dataset.btn === 'up') {
      this.model.sortUp(data);
    } else if (event.target.dataset.btn === 'down') {
      this.model.sortDown(data);
    } else if (event.target.dataset.btn === 'quantity') {
      this.model.sortQuantity(data);
    }
  }

  showSortByPrice(collectionPet) {
    this.routerShowSorterGoods(collectionPet);
  }
}
