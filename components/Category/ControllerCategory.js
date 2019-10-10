import ModelCategory from './modelCategory.js';
import ViewCategory from './viewCategory.js';

export default class ControllerCategory {
  constructor(observer) {
    this.observer = observer;
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
        this.showCategory(this.model.makeCategory('cat'));
        break;
      case 'dogs':
        this.showCategory(this.model.makeCategory('dog'));
        break;
      case 'fish':
        this.showCategory(this.model.makeCategory('fish'));
        break;
      case 'birds':
        this.showCategory(this.model.makeCategory('bird'));
        break;
      default: {
        this.showCategory(this.model.makeCategory('all'));
        break;
      }
    }
  }

  showCategory(collectionPet) {
    this.model.addCategoryToLocalStorage(collectionPet);
    this.observer.emit('made category', collectionPet);
  }
}
