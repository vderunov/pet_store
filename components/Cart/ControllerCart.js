import ModelCart from './ModelCart.js';
import ViewCart from './ViewCart.js';

export default class ControllerCart {
  constructor() {
    this.view = new ViewCart(this);
    this.model = new ModelCart(this);
    this.cart = {};
    this.init();
  }

  init() {
    this.view.addHandlerToBuyBtns();
    this.checkCart();
  }

  addToLocalStorageCart(e) {
    console.log('ControllerCart =>> addToLocalStorageCart --- OUT IF');
    if (e.target.classList.contains('buy')) {
      console.log('ControllerCart =>> addToLocalStorageCart --- INSIDE IF');
      e.stopPropagation();
      this.addToCart(e.target.getAttribute('data-id'));
      localStorage.setItem('cart', JSON.stringify(this.cart));
      this.view.renderListInCart(this.cart);
    }
  }

  addToCart(id) {
    console.log('ControllerCart =>> addToCart');
    if (this.cart[id]) {
      this.cart[id]++;
    } else {
      this.cart[id] = 1;
    }
  }

  checkCart() {
    console.log('ControllerCart =>> checkCart --- OUT IF');
    if (localStorage.getItem('cart')) {
      console.log('ControllerCart =>> checkCart --- INSIDE IF');
      this.cart = JSON.parse(localStorage.getItem('cart'));
    }
  }
}
