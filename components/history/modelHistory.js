export default class ModelHistory {
  constructor(contr) {
    this.controller = contr;
    this.oldPurchases = JSON.parse(localStorage.getItem('purchaseHistory'));
  }

  createHistoryStorage() {
    if (!this.oldPurchases) {
      this.oldPurchases = [];
      const cart = JSON.parse(localStorage.getItem('cart'));

      for (const key in cart) {
        const obj = {};
        obj[key] = cart[key];
        obj.date = this.formatDate(new Date());
        this.oldPurchases.push(obj);
      }

      localStorage.setItem(
        'purchaseHistory',
        JSON.stringify(this.oldPurchases)
      );
    } else {
      this.addToPurchaseHistory(JSON.parse(localStorage.getItem('cart')));
    }
  }

  addToPurchaseHistory(cart) {
    for (const key in cart) {
      const obj = {};
      obj[key] = cart[key];
      obj.date = this.formatDate(new Date());
      this.oldPurchases.push(obj);
    }
    localStorage.setItem('purchaseHistory', JSON.stringify(this.oldPurchases));
  }

  clearCart(listInCart, counterCart) {
    listInCart.innerHTML = '';
    counterCart.innerHTML = '0';
    localStorage.removeItem('cart');
    this.controller.clearCart();
  }

  formatDate(date) {
    let dd = date.getDate();
    if (dd < 10) dd = `0${dd}`;

    let mm = date.getMonth() + 1;
    if (mm < 10) mm = `0${mm}`;

    let yy = date.getFullYear() % 100;
    if (yy < 10) yy = `0${yy}`;

    return `${dd}.${mm}.${yy}`;
  }
}
