import Templater from '../../src/templater.js';

export default class ViewProduct {
  constructor() {
    this.templater = new Templater('./components/product/product.html');
  }

  render(data) {
    const goods = document.querySelector('#root-goods');
    goods.innerHTML = '';
    data.forEach(elem => {
      this.templater.load(elem, goods);
    });
  }
}
