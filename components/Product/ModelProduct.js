export default class ModelProduct {
  loadGoodsFromJSON(showAllGoods) {
    fetch('/data/goods.json')
      .then(res => res.json())
      .then(out => {
        this.addGoodsInLocalStorage(out);
        showAllGoods(out);
      });
  }

  addGoodsInLocalStorage(out) {
    localStorage.setItem('goods', JSON.stringify(out));
  }

  setActiveCase(data) {
    localStorage.setItem('actualGoods', JSON.stringify(data));
  }
}
