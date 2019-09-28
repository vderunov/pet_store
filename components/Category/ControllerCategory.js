import ModelCategory from './ModelCategory.js';
import ViewCategory from './ViewCategory.js';

export default class ControllerCategory {
  constructor(router) {
    this.router = router.controllerProduct.showAllGoods.bind(
      router.controllerProduct
    );
    this.view = new ViewCategory(this);
    this.model = new ModelCategory(this);
    this.init();
  }

  init() {
    this.view.render();
    this.view.addEventOnNav();
  }

  choosePet(event) {
    const { pet } = event.target.dataset;
    switch (pet) {
      case 'cats':
        this.model.makeCategory('cat');
        break;
      case 'dogs':
        this.model.makeCategory('dog');
        break;
      case 'fish':
        this.model.makeCategory('fish');
        break;
      case 'birds':
        this.model.makeCategory('bird');
        break;
      default:
        this.model.makeCategory('all');
        break;
    }
  }

  showCategory(collectionPet) {
    this.router(collectionPet);
  }
}
