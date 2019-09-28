import ModelCart from './ModelCart.js';
import ViewCart from './ViewCart.js';

export default class ControllerCart {
  constructor() {
    this.model = new ModelCart(this);
    this.view = new ViewCart(this);
    this.cart = {};
    this.init();
  }

  init() {
    this.view.addHandlerToBuyBtns();
    this.checkCart();
  }

  addToLocalStorageCart(e) {
    if (e.target.classList.contains('buy')) {
      this.addToCart(e.target.getAttribute('data-id'));
      localStorage.setItem('cart', JSON.stringify(this.cart));
      this.view.renderCart(this.cart);
      e.stopPropagation();
    }
  }

  addToCart(id) {
    if (this.cart[id]) {
      this.cart[id]++;
    } else {
      this.cart[id] = 1;
    }
  }

  checkCart() {
    if (localStorage.getItem('cart')) {
      this.cart = JSON.parse(localStorage.getItem('cart'));
    }
  }
}
