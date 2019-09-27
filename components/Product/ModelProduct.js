export default class ModelProduct {
  constructor(contr) {
    this.controller = contr;
  }

  loadGoodsFromJSON() {
    fetch('../../data/goods.json')
      .then(res => res.json())
      .then(out => {
        this.addGoodsInLocalStorage(out);
        this.controller.showAllGoods(out);
      });
  }

  addGoodsInLocalStorage(out) {
    localStorage.setItem('goods', JSON.stringify(out));
  }
}
