export default class ModelCart {
  constructor(contr) {
    this.controller = contr;
    this.availableQuantityOfGoods;
    this.isAvailableGoods;
    this.cart = {};
  }

  checkAmountGoods(id) {
    if (!this.cart[id]) {
      this.isAvailableGoods = false;
      this.increaseQuantity(id);
    }

    this.getAmountGoodsFromStock(id);

    if (this.availableQuantityOfGoods > this.cart[id]) {
      this.isAvailableGoods = true;
      this.increaseQuantity(id);
    } else {
      this.setDisableOnButton(id);
    }
  }

  setDisableOnButton(id) {
    document
      .querySelector(`[data-id="${id}"]`)
      .setAttribute('disabled', 'disabled');
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

  getAmountGoodsFromStock(id) {
    this.data = JSON.parse(localStorage.getItem('goods'));
    this.data.forEach(elem => {
      if (elem.id === Number(id)) {
        this.availableQuantityOfGoods = elem.quantity;
      }
    });

    return this.availableQuantityOfGoods;
  }

  increaseQuantity(id) {
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
