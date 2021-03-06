import ModelHistory from './modelHistory.js';
import ViewHistory from './viewHistory.js';

export default class ControllerHistory {
  constructor() {
    this.view = new ViewHistory();
    this.model = new ModelHistory();
    this.view.renderHistoryModal(this.makeHistoryList.bind(this));
  }

  makeHistoryList() {
    this.view.getNodes(this.transferCreateHistoryStorage.bind(this));
    this.view.renderHistoryList(
      this.model.getPurchaseHistory(),
      this.model.getDataFromLocalStorage()
    );
  }

  transferCreateHistoryStorage() {
    this.model.createHistoryStorage();
    this.model.clearCart(this.view.listInCart, this.view.counterCart);
    this.view.renderHistoryList();
  }
}
