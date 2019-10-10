import ModelCart from './modelCart.js';
import ViewCart from './viewCart.js';

export default class ControllerCart {
  constructor() {
    this.view = new ViewCart();
    this.model = new ModelCart(this);
    this.totalPrice = 0;
    this.init();
  }

  init() {
    this.view.addHandlerToBuyBtns(
      this.addProductToCart.bind(this),
      this.setDisabledBtn.bind(this),
      this.modalHandler.bind(this)
    );
    this.model.checkCart();
    this.view.renderListInCart(
      this.model.getDataCartFromLS(),
      this.model.getDataFromLS()
    );
  }

  clearCart() {
    this.model.clearCartModel();
  }

  addProductToCart(e) {
    if (e.target.classList.contains('buy')) {
      e.stopPropagation();
      this.model.checkAmountGoods(e.target.getAttribute('data-id'));
    }
  }

  setDisabledBtn(event) {
    this.model.setAllDisabledBtn(event);
  }

  modalHandler(event) {
    const idProduct = event.target.dataset.art;
    const { target } = event;

    if (target.classList.contains('plus')) {
      this.model.plusProduct(idProduct);
      event.stopPropagation();
    } else if (target.classList.contains('minus')) {
      this.model.minusProduct(idProduct, this.renderViewCart.bind(this));
      event.stopPropagation();
    } else if (target.classList.contains('delete')) {
      this.model.deleteProduct(idProduct, this.renderViewCart.bind(this));
      event.stopPropagation();
    }
  }

  renderViewCart(cart) {
    this.model.getAmountGoodsCart();
    this.view.renderListInCart(cart, this.model.getDataFromLS());
  }
}
