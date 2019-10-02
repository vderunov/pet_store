export default class ModelCart {
  constructor(contr) {
    this.controller = contr;
    this.availableQuantityOfGoods;
    this.isAvailableGoods;
    this.cart = {};
  }

  getAmountGoodsCart() {
    const cart = JSON.parse(localStorage.getItem('cart'));

    if (Object.values(cart).length) {
      document.querySelector('#counter-cart').innerHTML = Object.values(
        cart
      ).reduce((a, b) => a + b);
    }
  }

  checkAmountGoods(id) {
    if (!this.cart[id]) {
      this.isAvailableGoods = false;
      this.addToCart(id);
      this.getAmountGoodsFromStock(id);
      if (this.availableQuantityOfGoods === this.cart[id]) {
        this.setDisableOnButton(id);
      }
      return;
    }

    this.getAmountGoodsFromStock(id);

    if (this.availableQuantityOfGoods > this.cart[id]) {
      this.isAvailableGoods = true;
      this.addToCart(id);
    }

    if (this.availableQuantityOfGoods === this.cart[id]) {
      this.setDisableOnButton(id);
      return false;
    }
  }

  getAmountGoodsFromStock(id) {
    this.data = JSON.parse(localStorage.getItem('goods'));
    this.data.forEach(elem => {
      if (elem.id === Number(id)) {
        this.availableQuantityOfGoods = elem.quantity;
      }
    });

    return this.availableQuantityOfGoods;
  }

  setAllDisabledBtn() {
    for (const key in this.cart) {
      if (this.cart[key] === this.getAmountGoodsFromStock(key)) {
        document
          .querySelector(`[data-id="${key}"]`)
          .setAttribute('disabled', 'disabled');
      }
    }
  }

  setDisableOnButton(id) {
    document
      .querySelector(`[data-id="${id}"]`, `.plus[data-art="${id}"]`)
      .setAttribute('disabled', 'disabled');
  }

  addToCart(id) {
    if (this.isAvailableGoods) {
      this.cart[id]++;
    } else {
      this.cart[id] = 1;
    }

    this.saveToLocalStorageCart(this.cart);
    this.controller.renderViewCart(this.cart);
  }

  checkCart() {
    if (localStorage.getItem('cart')) {
      this.getAmountGoodsCart();
      return (this.cart = JSON.parse(localStorage.getItem('cart')));
    }
  }

  saveToLocalStorageCart(obj) {
    localStorage.setItem('cart', JSON.stringify(obj));
  }

  plusProduct(idProduct) {
    if (this.checkAmountGoods(idProduct)) {
      this.cart[idProduct]++;
      this.saveToLocalStorageCart(this.cart);
    }
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
