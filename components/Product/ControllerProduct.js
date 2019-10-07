import ModelProduct from './modelProduct.js';
import ViewProduct from './viewProduct.js';

export default class ControllerProduct {
  constructor() {
    this.model = new ModelProduct();
    this.view = new ViewProduct();
    this.initJSON();
  }

  initJSON() {
    this.model.loadGoodsFromJSON(this.showAllGoods.bind(this));
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
