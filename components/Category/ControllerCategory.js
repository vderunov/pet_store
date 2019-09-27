import { ModelCategory } from './ModelCategory.js';
import { ViewCategory } from './ViewCategory.js';
import { ControllerProduct } from './../../App/main.js';

export class ControllerCategory {
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

  choosePet() {
    const pet = event.target.dataset.pet;
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
      case 'all':
        this.model.makeCategory('all');
        break;
    }
  }

  showCategory(collectionPet) {
    this.ControllerProduct.showAllGoods(collectionPet);
  }
}
