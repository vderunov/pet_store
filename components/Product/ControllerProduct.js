import ModelProduct from './modelProduct.js';
import ViewProduct from './viewProduct.js';

export default class ControllerProduct {
  constructor() {
    this.model = new ModelProduct();
    this.view = new ViewProduct();
    this.model.loadGoodsFromJSON(this.showAllGoods.bind(this));
  }

  showAllGoods(data) {
    this.model.setActiveCase(data);
    this.view.render(data);
  }
}
