import ModelSort from './modelSort.js';
import ViewSort from './viewSort.js';

export default class ControllerSort {
  constructor(router) {
    this.model = new ModelSort();
    this.view = new ViewSort();
    this.routerActiveCase = router.controllerProduct.getActiveCase.bind(
      router.controllerProduct
    );
    this.routerShowGoods = router.controllerProduct.showAllGoods.bind(
      router.controllerProduct
    );
    this.init();
  }

  init() {
    this.view.render(this.sortBy.bind(this));
    this.view.addEventOnNav(
      this.getProps.bind(this),
      this.getGoodsByProp.bind(this)
    );
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
        this.model.makeSetProperties(
          'fur',
          'gender',
          data,
          this.initCheckbox.bind(this)
        );
        break;
      case 'dogs':
        this.model.makeSetProperties(
          'weightkg',
          'specialization',
          data,
          this.initCheckbox.bind(this)
        );
        break;
      case 'fish':
        this.model.makeSetProperties(
          'color',
          'lifetimeyears',
          data,
          this.initCheckbox.bind(this)
        );
        break;
      case 'birds':
        this.model.makeSetProperties(
          'talking',
          'weightkg',
          data,
          this.initCheckbox.bind(this)
        );
        break;
      default:
        this.model.makeSetProperties(
          'all',
          null,
          null,
          null,
          this.delCheckbox.bind(this)
        );
        break;
    }
  }

  sortBy(event) {
    const data = this.routerActiveCase();

    if (event.target.dataset.btn === 'up') {
      this.model.sortUp(data, this.showSortByPrice.bind(this));
    } else if (event.target.dataset.btn === 'down') {
      this.model.sortDown(data, this.showSortByPrice.bind(this));
    } else if (event.target.dataset.btn === 'quantity') {
      this.model.sortQuantity(data, this.showSortByPrice.bind(this));
    }
  }

  getGoodsByProp(e) {
    if (e.target.checked) {
      this.model.addCheckBox(e.target.dataset, this.showSortByPrice.bind(this));
    } else {
      this.model.delCheckBox(e.target.dataset, this.showSortByPrice.bind(this));
    }
  }

  showSortByPrice(collectionPet) {
    this.routerShowGoods(collectionPet);
  }
}
