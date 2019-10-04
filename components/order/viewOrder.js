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

  renderForm() {
    this.templater.load(
      null,
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
    this.controller.getUserInputsValueFromLocalStorage();
  }

  showValidateMassage(node, span) {
    node.nextSibling.remove();
    node.after(span);
  }

  showTotalPrice(totalPrice) {
    this.totalPrice.innerHTML = totalPrice;
  }

  insertUserValue(userValueObj) {
    if (userValueObj) {
      const {
        firstName = '',
        lastName = '',
        email = '',
        phone = '',
        address = ''
      } = userValueObj;

      this.firstName.value = firstName;
      this.lastName.value = lastName;
      this.email.value = email;
      this.phone.value = phone;
      this.address.value = address;
    }
  }
}
