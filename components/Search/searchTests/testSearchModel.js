import ModelSearch from '../modelSearch.js';

export default function makeTestsForSearchModel(assert) {
  const modelSearch = new ModelSearch();

  describe('Model Search', () => {
    describe('makeSortByInput', () => {
      it('Does the function return an array?', () => {
        assert.typeOf(modelSearch.makeSortByInput('u'), 'array');
      });
    });

    describe('With parameters', () => {
      it('With parameters: (si)', () => {
        assert.equal(modelSearch.makeSortByInput('si'), [
          {
            ageMonth: 1,
            color: ['white', 'black'],
            fur: 'short',
            gender: 'male',
            id: 1,
            lifetimeyears: 12,
            lopiness: false,
            name: 'Siamese',
            pedigree: true,
            price: 100,
            quantity: 2,
            rapacity: true,
            shortLegged: false,
            trimming: false,
            type: 'cat',
            url: './data/img/pets/cats/siamskaya.jpg',
            weightkg: 5
          }
        ]);
      });
    });
  });
}
