import ControllerProduct from '../components/Product/ControllerProduct.js';
import ControllerCategory from '../components/Category/ControllerCategory.js';
import ControllerSearch from '../components/Search/ControllerSearch.js';
import ControllerSort from '../components/Sort/ControllerSort.js';

export default class Router {
  constructor() {
    this.controllerProduct = new ControllerProduct(this);
    this.controllerCategory = new ControllerCategory(this);
    this.controllerSearch = new ControllerSearch(this);
    this.controllerSort = new ControllerSort(this);
  }
}

const router = new Router();
