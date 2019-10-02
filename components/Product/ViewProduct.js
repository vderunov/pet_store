import Templater from '../../src/Templater.js';

export default class ViewProduct {
  constructor() {
    this.templater = new Templater('../components/Product/Product.html');
  }

  render(data) {
    const goods = document.querySelector('#root-goods');
    goods.innerHTML = '';
    data.forEach(elem => {
      this.templater.load(elem, goods);
    });
  }
}
