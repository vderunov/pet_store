import { ControllerProduct } from './../components/Product/ControllerProduct.js';
import { ControllerCategory } from './../components/Category/ControllerCategory.js';
import { ControllerSearch } from './../components/Search/ControllerSearch.js';

// const global = {};

// function getGlobalStock() {
//   fetch('../../data/goods.json')
//     .then(res => res.json())
//     .then(out => {
//       global = out;
//     });
// }

// getGlobalStock();

const product = new ControllerProduct();
const category = new ControllerCategory();
const search = new ControllerSearch();

export { ControllerProduct };
