import ModelCart from './modelCart.js';
import ViewCart from './viewCart.js';

export default class ControllerCart {
  constructor() {
    this.view = new ViewCart(this);
    this.model = new ModelCart(this);
    this.init();
  }

  init() {
    this.view.addHandlerToBuyBtns();
    this.model.checkCart();
  }

  addProductToCart(e) {
    if (e.target.classList.contains('buy')) {
      e.stopPropagation();
      this.model.checkAmountGoods(e.target.getAttribute('data-id'));
    }
  }

  setDisabledBtn() {
    this.model.setAllDisabledBtn();
  }

  modalHandler(event) {
    const idProduct = event.target.dataset.art;
    const { target } = event;

    if (target.classList.contains('plus')) {
      this.model.plusProduct(idProduct);
      event.stopPropagation();
    } else if (target.classList.contains('minus')) {
      this.model.minusProduct(idProduct);
      event.stopPropagation();
    } else if (target.classList.contains('delete')) {
      this.model.deleteProduct(idProduct);
      event.stopPropagation();
    }
  }

  renderViewCart(cart) {
    this.model.getAmountGoodsCart();
    this.view.renderListInCart(cart);
  }
}
