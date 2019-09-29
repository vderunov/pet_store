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

  getProductId(e) {
    if (e.target.classList.contains('buy')) {
      e.stopPropagation();
      this.increaseQuantity(e.target.getAttribute('data-id'));
      this.saveToLocalStorageCart(this.cart);
      this.view.renderListInCart(this.cart);
    }
  }

  saveToLocalStorageCart(obj) {
    localStorage.setItem('cart', JSON.stringify(obj));
  }

  increaseQuantity(id) {
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

  modalHandler(event) {
    const idProduct = event.target.dataset.art;

    if (event.target.classList.contains('plus')) {
      this.model.test();
      event.stopPropagation();
      this.cart[idProduct]++;
      this.saveToLocalStorageCart(this.cart);
      this.view.renderListInCart(this.cart);
    } else if (event.target.classList.contains('minus')) {
      event.stopPropagation();
      if (this.cart[idProduct] > 1) {
        this.cart[idProduct]--;
      } else {
        delete this.cart[idProduct];
      }
      this.saveToLocalStorageCart(this.cart);
      this.view.renderListInCart(this.cart);
    } else if (event.target.classList.contains('delete')) {
      delete this.cart[idProduct];
      this.saveToLocalStorageCart(this.cart);
      this.view.renderListInCart(this.cart);
      event.stopPropagation();
    }
  }
}
