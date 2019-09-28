export default class ModelSort {
  constructor(contr) {
    this.controller = contr;
  }

  sortUp(goods) {
    this.controller.showSortByPrice(
      goods.sort((a, b) => (a.price > b.price ? 1 : -1))
    );
  }

  sortDown(goods) {
    this.controller.showSortByPrice(
      goods.sort((a, b) => (a.price < b.price ? 1 : -1))
    );
  }

  sortQuantity(goods) {
    if (this.i) {
      this.controller.showSortByPrice(
        goods.sort((a, b) => (a.quantity < b.quantity ? 1 : -1))
      );
      this.i = false;
    } else {
      this.controller.showSortByPrice(
        goods.sort((a, b) => (a.quantity > b.quantity ? 1 : -1))
      );
      this.i = true;
    }
  }
}
