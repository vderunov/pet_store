import ModelCategory from './ModelCategory.js';
import ViewCategory from './ViewCategory.js';
import { ControllerProduct } from '../../App/main.js';

export default class ControllerCategory {
  constructor() {
    this.ControllerProduct = new ControllerProduct();
    this.view = new ViewCategory(this);
    this.model = new ModelCategory(this);
    this.showNavBar();
  }

  showNavBar() {
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
    this.ControllerProduct.showAllGoods(collectionPet);
  }
}
