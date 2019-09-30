import Templater from '../../src/Templater.js';

export default class ViewCategory {
  constructor(contr) {
    this.templater = new Templater('../components/Category/Category.html');
    this.controller = contr;
  }

  render() {
    this.templater.load(null, document.querySelector('#category'));
  }

  addEventOnNav() {
    document
      .querySelector('#category')
      .addEventListener(
        'click',
        this.controller.choosePet.bind(this.controller)
      );
  }
}
