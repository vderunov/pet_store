import ControllerSort from '../components/sort/ControllerSort.js';
import ControllerProduct from '../components/product/controllerProduct.js';
import ControllerCategory from '../components/category/controllerCategory.js';
import ControllerSearch from '../components/search/controllerSearch.js';
import ControllerCart from '../components/cart/controllerCart.js';
import ControllerOrder from '../components/order/controllerOrder.js';

export default class Router {
  constructor() {
    this.controllerProduct = new ControllerProduct(this);
    this.controllerCategory = new ControllerCategory(this);
    this.controllerSearch = new ControllerSearch(this);
    this.controllerSort = new ControllerSort(this);
    this.controllerCart = new ControllerCart(this);
    this.controllerOrder = new ControllerOrder(this);
  }
}
