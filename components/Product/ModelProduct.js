export default class ModelProduct {
  loadGoodsFromJSON(showAllGoods) {
    fetch(
      // 'https://cors-anywhere.herokuapp.com/https://gentle-coast-49966.herokuapp.com/get-goods'
      '/data/goods.json'
    )
      .then(res => res.json())
      .then(out => {
        this.addGoodsInLocalStorage(out);
        showAllGoods(out);
      });
  }

  addGoodsInLocalStorage(out) {
    localStorage.setItem('goods', JSON.stringify(out));
  }
}
