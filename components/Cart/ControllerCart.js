import ModelCart from './ModelCart.js';
import ViewCart from './ViewCart.js';

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

  changeIconCart() {
    const cart = document.querySelector('.cart');
    if (localStorage.getItem('cart')) {
      cart.src = './data/img/icon_cart_full.svg';
    }
  }

  addProductToCart(e) {
    if (e.target.classList.contains('buy')) {
      e.stopPropagation();
      this.model.increaseQuantity(e.target.getAttribute('data-id'));
      this.changeIconCart();
    }
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
    this.view.renderListInCart(cart);
  }
}
