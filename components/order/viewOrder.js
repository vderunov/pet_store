import Templater from '/../src/templater.js';

export default class ViewOrder {
  constructor(contr) {
    this.controller = contr;
    this.templater = new Templater('../components/Order/orderModal.html');
    this.cartIcon = document.querySelector('[href="#modal-sections"]');
    this.init();
  }

  init() {
    this.cartIcon.addEventListener(
      'click',
      this.controller.addEventOnCartIcon.bind(this.controller)
    );
  }

  renderForm(userValueObj) {
    this.templater.load(
      userValueObj,
      document.querySelector('#root-modal-order'),
      ['#firstName', '#lastName', '#email', '#phone', '#address'],
      'input',
      this.controller.validateFormInputs.bind(this.controller)
    );

    this.totalPrice = document.querySelector('#total-price');
    this.firstName = document.querySelector('#firstName');
    this.lastName = document.querySelector('#lastName');
    this.email = document.querySelector('#email');
    this.phone = document.querySelector('#phone');
    this.address = document.querySelector('#address');

    this.controller.getTotalPrice();

    document
      .querySelector('#confirm-btn')
      .addEventListener(
        'click',
        this.controller.transferSendPurchaseMessage.bind(
          this.controller,
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
