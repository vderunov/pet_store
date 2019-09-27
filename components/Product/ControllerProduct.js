import ModelProduct from './ModelProduct.js';
import ViewProduct from './ViewProduct.js';

export default class ControllerProduct {
  constructor() {
    this.model = new ModelProduct(this);
    this.view = new ViewProduct(this);
    this.initJSON();
  }

  initJSON() {
    this.model.loadGoodsFromJSON();
  }

  showAllGoods(data) {
    this.view.render(data);
  }
}
