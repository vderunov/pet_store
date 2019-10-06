import ModelOrder from './modelOrder.js';
import ViewOrder from './viewOrder.js';

export default class ControllerOrder {
  constructor() {
    this.view = new ViewOrder(this);
    this.model = new ModelOrder(this);
  }

  addEventOnCartIcon() {
    this.model.getUserValueObj();
  }

  validateFormInputs(event) {
    this.model.makeValidationFormInputs(event);
  }

  getTotalPrice() {
    this.model.getTotalPriceModel();
  }

  transferTotalPrice(totalPrice) {
    this.view.showTotalPrice(totalPrice);
  }

  transferFormValue(userValueObj) {
    this.view.renderForm(userValueObj);
  }

  transferValidMessage(parentNode, span) {
    this.view.showValidateMassage(parentNode, span);
  }

  transferSendPurchaseMessage(
    firstName,
    lastName,
    email,
    phone,
    address,
    totalPrice
  ) {
    this.model.notify(firstName, lastName, email, phone, address, totalPrice);
    this.model.createDataForEmailSend(firstName, lastName, email, totalPrice);
  }
}
