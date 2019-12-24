import Templater from '../../src/templater.js';

export default class ViewCategory {
  constructor() {
    this.templater = new Templater('./components/category/category.html');
  }

  render() {
    this.templater.load(null, document.querySelector('#root-category'));
  }

  addEventOnNav(choosePet) {
    document
      .querySelector('#root-category')
      .addEventListener('click', choosePet);
  }
}
