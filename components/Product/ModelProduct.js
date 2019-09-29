export default class ModelProduct {
  constructor(contr) {
    this.controller = contr;
  }

  loadGoodsFromJSON() {
    fetch(
      'https://cors-anywhere.herokuapp.com/https://gentle-coast-49966.herokuapp.com/get-goods'
    )
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
