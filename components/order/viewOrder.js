import Templater from '../../src/templater.js';

export default class ViewOrder {
  constructor() {
    this.templater = new Templater('../components/order/orderModal.html');
    this.cartIcon = document.querySelector('[href="#modal-sections"]');
  }

  bindCartIcon(addEventOnCartIcon) {
    this.cartIcon.addEventListener('click', addEventOnCartIcon);
  }

  renderForm(
    userValueObj,
    validateFormInputs,
    transferSendPurchaseMessage,
    getTotalPrice
  ) {
    this.templater.load(
      userValueObj,
      document.querySelector('#root-modal-order'),
      ['#firstName', '#lastName', '#email', '#phone', '#address'],
      'input',
      validateFormInputs
    );

    this.totalPrice = document.querySelector('#total-price');
    this.firstName = document.querySelector('#firstName');
    this.lastName = document.querySelector('#lastName');
    this.email = document.querySelector('#email');
    this.phone = document.querySelector('#phone');
    this.address = document.querySelector('#address');

    getTotalPrice();

    document
      .querySelector('#confirm-btn')
      .addEventListener(
        'click',
        transferSendPurchaseMessage.bind(
          this,
          this.firstName,
          this.lastName,
          this.email,
          this.phone,
          this.address,
          this.totalPrice
        )
      );
  }

  showValidateMassage(node, span) {
    node.nextSibling.remove();
    node.after(span);
  }

  showTotalPrice(totalPrice) {
    this.totalPrice.innerHTML = totalPrice;
  }
}
