import Templater from '/../src/templater.js';

export default class ViewOrder {
  constructor(contr) {
    this.controller = contr;
    this.templater = new Templater('../components/Order/orderModal.html');
    this.cartIcon = document.querySelector('[href="#modal-sections"]');
    this.init();
  }

  init() {
    this.cartIcon.addEventListener('click', () => {
      this.renderForm();
    });
  }

  renderForm() {
    this.templater.load(
      null,
      document.querySelector('#modal-sections'),
      ['#firstName', '#lastName', '#email', '#phone', '#address'],
      'input',
      this.controller.validate.bind(this.controller)
    );
  }
}
