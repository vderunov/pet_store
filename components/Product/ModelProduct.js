export default class ModelProduct {
  constructor(contr) {
    this.controller = contr;
  }

  async loadGoodsFromJSON() {
    const response = await fetch('../../data/goods.json');
    const out = await response.json();
    this.addGoodsInLocalStorage(out);
    this.controller.showAllGoods(out);
  }

  addGoodsInLocalStorage(out) {
    localStorage.setItem('goods', JSON.stringify(out));
  }
}
