import ControllerSort from '../components/sort/controllerSort.js';
import ControllerProduct from '../components/product/controllerProduct.js';
import ControllerCategory from '../components/category/controllerCategory.js';
import ControllerSearch from '../components/search/controllerSearch.js';
import ControllerCart from '../components/cart/controllerCart.js';
import ControllerOrder from '../components/order/controllerOrder.js';
import ControllerHistory from '../components/history/controllerHistory.js';
import Observer from '../components/observer/observer.js';

export default class Router {
  constructor() {
    this.observer = new Observer();
    this.controllerProduct = new ControllerProduct(this.observer);
    this.controllerCategory = new ControllerCategory(this.observer);
    this.controllerSearch = new ControllerSearch(this);
    this.controllerSort = new ControllerSort(this);
    this.controllerCart = new ControllerCart(this);
    this.controllerOrder = new ControllerOrder(this);
    this.controllerOrder = new ControllerHistory(this);
  }
}
