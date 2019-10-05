import Templater from '/../src/templater.js';

export default class ViewCategory {
  constructor(contr) {
    this.controller = contr;
    this.templater = new Templater('../components/Category/category.html');
  }

  render() {
    this.templater.load(null, document.querySelector('#root-category'));
  }

  addEventOnNav() {
    document
      .querySelector('#root-category')
      .addEventListener(
        'click',
        this.controller.choosePet.bind(this.controller)
      );
  }
}
