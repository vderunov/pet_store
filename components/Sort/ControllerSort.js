import ModelSort from './ModelSort.js';
import ViewSort from './ViewSort.js';
import { ControllerProduct } from '../../App/main.js';

export default class ControllerSort {
  constructor() {
    this.ControllerProduct = new ControllerProduct();
    this.view = new ViewSort(this);
    this.model = new ModelSort(this);
    this.showSort();
  }

  showSort() {
    this.view.render();
    // this.view.addEventOnNav();
  }

  // choosePet(event) {
  //   const { pet } = event.target.dataset;
  //   switch (pet) {
  //     case 'cats':
  //       this.model.makeCategory('cat');
  //       break;
  //     case 'dogs':
  //       this.model.makeCategory('dog');
  //       break;
  //     case 'fish':
  //       this.model.makeCategory('fish');
  //       break;
  //     case 'birds':
  //       this.model.makeCategory('bird');
  //       break;
  //     default:
  //       this.model.makeCategory('all');
  //       break;
  //   }
  // }

  // showCategory(collectionPet) {
  //   this.ControllerProduct.showAllGoods(collectionPet);
  // }
}
