import Templater from '/src/templater.js';

export default class ViewHistory {
  constructor() {
    this.templater = new Templater('/components/history/historyModal.html');
  }

  renderHistoryModal(makeHistoryList) {
    this.templater.load(
      null,
      document.querySelector('#root-modal-history'),
      ['#history', '#buy-btn'],
      'click',
      makeHistoryList
    );
  }

  getNodes(transferCreateHistoryStorage) {
    const listInCart = document.querySelector('#listInCart');
    const counterCart = document.querySelector('#counter-cart');
    this.idHistoryList = document.querySelector('#historyList');
    this.confirmBtn = document.querySelector('#confirm-btn');

    if (this.confirmBtn) {
      this.confirmBtn.addEventListener(
        'click',
        transferCreateHistoryStorage.bind(listInCart, counterCart)
      );
    }
  }

  renderHistoryList(purchaseHistory, data) {
    if (!purchaseHistory) {
      return;
    }

    let str = '';
    purchaseHistory.forEach(el => {
      for (const key in el) {
        data.forEach(elem => {
          if (elem.id === Number(key)) {
            str += `
    <tr>
      <td>
        <img class="uk-preserve-width uk-border-circle cart-img" src="data/img/pets/${
          elem.type
        }/${elem.name}.jpg" width="40" alt="">
          <div>
            <p class="uk-text-truncate">Breed: ${elem.name}</p>
            <p class="uk-text-truncate">Unit price: ${elem.price} USD</p>
            <p class="uk-text-truncate">Amount: ${el[key]}</p>
            <p class="uk-text-truncate">Paid: ${el[key] * elem.price} USD</p>
            <p class="uk-text-truncate">Date of purchase: ${el.date}</p>
          </div>
      </td>
    </tr>`;
          }
        });
      }
      this.idHistoryList.innerHTML = str;
    });
  }
}
