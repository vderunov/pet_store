export default class ModelProduct {
  constructor(contr) {
    this.controller = contr;
    this.data = {
      pets: []
    };
  }

  loadGoodsFromJSON() {
    fetch('../../data/goods.json')
      .then(res => res.json())
      .then(out => {
        this.addGoodsInLocalStorage(out);
        this.data.pets = out;
        this.controller.showAllGoods(this.data.pets);
      });
  }

  addGoodsInLocalStorage(out) {
    localStorage.setItem('goods', JSON.stringify(out));
  }
}
