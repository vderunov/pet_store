import ModelOrder from '../modelOrder.js';

export default function makeTestsForOrderModel(assert) {
  const modelOrder = new ModelOrder();

  describe('Model Order', () => {
    describe('getTotalPriceModel', () => {
      it('Does the function return number?', () => {
        assert.typeOf(modelOrder.getTotalPriceModel(), 'number');
      });
    });
  });
}
