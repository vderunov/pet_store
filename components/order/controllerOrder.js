import ModelOrder from './modelOrder.js';
import ViewOrder from './viewOrder.js';

export default class ControllerOrder {
  constructor() {
    this.view = new ViewOrder();
    this.model = new ModelOrder();
    this.view.addHandlerOnBuyBtn(this.buyBtnInitializer.bind(this));
  }

  buyBtnInitializer() {
    this.model.getUserValueObj();
    this.totalPrice = this.model.getTotalPriceModel();
    this.view.renderForm(this.model.userValue, this.validateForm.bind(this));
    this.inputNodes = this.view.getInputDomNodes();
    this.view.getDomNodeConfirmBtn(this.confirmBtnHandler.bind(this));
    this.transferTotalPrice();
  }

  validateForm(event) {
    this.model.makeValidationFormInputs(event);
    this.transferValidMessage();
  }

  transferTotalPrice() {
    this.view.showTotalPrice(this.totalPrice);
  }

  transferValidMessage() {
    this.view.showValidateMassage(this.model.parentNode, this.model.span);
  }

  confirmBtnHandler() {
    this.model.notify(this.inputNodes);
    this.model.createDataForEmailSend(this.inputNodes);
  }
}
