export default class ModelProduct {
  constructor(contr) {
    this.controller = contr;
  }

  async loadGoodsFromJSON() {
    const response = await fetch('../../data/goods.json');
    const data = await response.json();
    return data;
  }

  async saveGoodsFromJSON() {
    const out = await this.loadGoodsFromJSON();
    this.addGoodsInLocalStorage(out);
    this.controller.showAllGoods(out);
  }

  addGoodsInLocalStorage(out) {
    localStorage.setItem('goods', JSON.stringify(out));
  }
}
