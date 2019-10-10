import testSearchModel from './components/search/searchTests/testSearchModel.js';
import testOrderModel from './components/order/orderTests/testOrderModel.js';

mocha.setup('bdd');

const { assert } = chai;
testSearchModel(assert);
testOrderModel(assert);

mocha.run();
