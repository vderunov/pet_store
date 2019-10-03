import ModelOrder from './modelOrder.js';
import ViewOrder from './viewOrder.js';

export default class ControllerOrder {
  constructor() {
    this.view = new ViewOrder(this);
    this.model = new ModelOrder(this);
  }

  validate() {
    console.log('VALIDATE!');
  }
}
