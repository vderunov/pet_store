import ModelOrder from './modelOrder.js';
import ViewOrder from './viewOrder.js';

export default class ControllerOrder {
  constructor() {
    this.view = new ViewOrder();
    this.model = new ModelOrder();
    this.view.bindCartIcon(this.addEventOnCartIcon.bind(this));
  }

  addEventOnCartIcon() {
    this.model.getUserValueObj(this.transferFormValue.bind(this));
  }

  validateFormInputs(event) {
    this.model.makeValidationFormInputs(
      event,
      this.transferValidMessage.bind(this)
    );
  }

  getTotalPrice() {
    this.model.getTotalPriceModel(this.transferTotalPrice.bind(this));
  }

  transferTotalPrice(totalPrice) {
    this.view.showTotalPrice(totalPrice);
  }

  transferFormValue(userValueObj) {
    this.view.renderForm(
      userValueObj,
      this.validateFormInputs.bind(this),
      this.transferSendPurchaseMessage.bind(this),
      this.getTotalPrice.bind(this)
    );
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
