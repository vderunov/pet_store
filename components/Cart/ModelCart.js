export default class ModelCart {
  constructor(contr) {
    this.controller = contr;
    this.cart = {};
  }

  increaseQuantity(id) {
    if (this.cart[id]) {
      this.cart[id]++;
    } else {
      this.cart[id] = 1;
    }

    this.saveToLocalStorageCart(this.cart);
    this.controller.renderViewCart(this.cart);
  }

  checkCart() {
    if (localStorage.getItem('cart')) {
      this.cart = JSON.parse(localStorage.getItem('cart'));
    }
  }

  saveToLocalStorageCart(obj) {
    localStorage.setItem('cart', JSON.stringify(obj));
  }

  plusProduct(idProduct) {
    this.cart[idProduct]++;
    this.saveToLocalStorageCart(this.cart);
    this.controller.renderViewCart(this.cart);
  }

  minusProduct(idProduct) {
    if (this.cart[idProduct] > 1) {
      this.cart[idProduct]--;
    } else {
      delete this.cart[idProduct];
    }
    this.saveToLocalStorageCart(this.cart);
    this.controller.renderViewCart(this.cart);
  }

  deleteProduct(idProduct) {
    delete this.cart[idProduct];
    this.saveToLocalStorageCart(this.cart);
    this.controller.renderViewCart(this.cart);

    if (Object.keys(this.cart).length === 0) {
      this.deleteCartFromLocalStorage();
    }
  }

  deleteCartFromLocalStorage() {
    localStorage.removeItem('cart');
  }
}
