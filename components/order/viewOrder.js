import Templater from '../../src/templater.js';

export default class ViewOrder {
  constructor() {
    this.templater = new Templater('../components/order/orderModal.html');
  }

  addHandlerOnBuyBtn(buyBtnInitializer) {
    document
      .querySelector('#buy-btn')
      .addEventListener('click', buyBtnInitializer);
  }

  renderForm(userValue, validateForm) {
    this.templater.load(
      userValue,
      document.querySelector('#root-modal-order'),
      ['#firstName', '#lastName', '#email', '#phone', '#address'],
      'input',
      validateForm
    );
  }

  getDomNodeConfirmBtn(confirmBtnHandler) {
    document
      .querySelector('#confirm-btn')
      .addEventListener('click', confirmBtnHandler);
  }

  getInputDomNodes() {
    return {
      totalPrice: document.querySelector('#total-price'),
      firstName: document.querySelector('#firstName'),
      lastName: document.querySelector('#lastName'),
      email: document.querySelector('#email'),
      phone: document.querySelector('#phone'),
      address: document.querySelector('#address')
    };
  }

  showValidateMassage(node, span) {
    node.nextSibling.remove();
    node.after(span);
  }

  showTotalPrice(totalPrice) {
    document.querySelector('#total-price').innerHTML = totalPrice;
  }
}
