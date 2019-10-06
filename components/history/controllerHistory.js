import ModelHistory from './modelHistory.js';
import ViewHistory from './viewHistory.js';

export default class ControllerHistory {
  constructor(router) {
    this.routerClearCart = router.controllerCart.clearCart.bind(
      router.controllerCart
    );
    this.view = new ViewHistory(this);
    this.model = new ModelHistory(this);
  }

  makeHistoryList() {
    const purchaseHistory = JSON.parse(localStorage.getItem('purchaseHistory'));
    const data = JSON.parse(localStorage.getItem('goods'));
    this.view.getNodes();
    this.view.renderHistoryList(purchaseHistory, data);
  }

  transferCreateHistoryStorage(listInCart, counterCart) {
    this.model.createHistoryStorage();
    this.model.clearCart(listInCart, counterCart);
    this.view.renderHistoryList();
  }

  clearCart() {
    this.routerClearCart();
  }
}
