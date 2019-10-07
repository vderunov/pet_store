import ModelCategory from './modelCategory.js';
import ViewCategory from './viewCategory.js';

export default class ControllerCategory {
  constructor(router) {
    // this.routerShowGoods = router.controllerProduct.showAllGoods.bind(
    //   router.controllerProduct
    // );

    this.router = router;
    this.view = new ViewCategory();
    this.model = new ModelCategory();
    this.init();
  }

  init() {
    this.view.render();
    this.view.addEventOnNav(this.choosePet.bind(this));
  }

  choosePet(event) {
    const { pet } = event.target.dataset;
    switch (pet) {
      case 'cats':
        this.model.makeCategory('cat', this.showCategory.bind(this));
        break;
      case 'dogs':
        this.model.makeCategory('dog', this.showCategory.bind(this));
        break;
      case 'fish':
        this.model.makeCategory('fish', this.showCategory.bind(this));
        break;
      case 'birds':
        this.model.makeCategory('bird', this.showCategory.bind(this));
        break;
      default:
        this.model.makeCategory('all', this.showCategory.bind(this));
        break;
    }
  }

  showCategory(collectionPet) {
    localStorage.setItem('category', JSON.stringify(collectionPet));
    this.router.controllerProduct.showAllGoods(collectionPet);
  }

  // test(routerShowGoods) {
  //   this.

  // }
}
