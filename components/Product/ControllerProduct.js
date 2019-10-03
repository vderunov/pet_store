import ModelProduct from './modelProduct.js';
import ViewProduct from './viewProduct.js';

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
    this.setActiveCase(data);
    this.view.render(data);
  }

  setActiveCase(data) {
    localStorage.setItem('actualGoods', JSON.stringify(data));
  }

  getActiveCase() {
    return JSON.parse(localStorage.getItem('actualGoods'));
  }

  getStock() {
    return JSON.parse(localStorage.getItem('goods'));
  }
}
