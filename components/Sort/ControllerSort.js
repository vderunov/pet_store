import ModelSort from './ModelSort.js';
import ViewSort from './ViewSort.js';

export default class ControllerSort {
  constructor(router) {
    this.model = new ModelSort(this);
    this.view = new ViewSort(this);
    this.routerActiveCase = router.controllerProduct.getActiveCase.bind(
      router.controllerProduct
    );
    this.routerShowSorterGoods = router.controllerProduct.showAllGoods.bind(
      router.controllerProduct
    );
    this.init();
  }

  init() {
    this.view.render();
    this.view.addEventOnNav();
  }

  initCheckbox(obj, data) {
    this.view.renderCheckbox(obj, data);
  }

  delCheckbox() {
    this.view.delCheckboxFromPage();
  }

  getProps(event) {
    const data = this.routerActiveCase();
    const { pet } = event.target.dataset;
    switch (pet) {
      case 'cats':
        this.model.makeSetProperties('fur', 'gender', data);
        break;
      case 'dogs':
        this.model.makeSetProperties('weightKg', 'specialization', data);
        break;
      case 'fish':
        this.model.makeSetProperties('color', 'lifetimeYears', data);
        break;
      case 'birds':
        this.model.makeSetProperties('talking', 'weightKg', data);
        break;
      default:
        this.model.makeSetProperties('all');
        break;
    }
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

  getGoodsByProp(e) {
    const data = JSON.parse(localStorage.getItem('category'));

    if (e.target.checked) {
      this.model.addCheckBox(e.target.dataset, data);
    } else {
      this.model.delCheckBox(e.target.dataset, data);
    }
  }

  showSortByPrice(collectionPet) {
    this.routerShowSorterGoods(collectionPet);
  }
}
