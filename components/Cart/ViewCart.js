export default class ViewCart {
  constructor() {
    this.init();
  }

  init() {
    this.renderCart();
    this.renderListInCart();
  }

  addHandlerToBuyBtns(addProductToCart, setDisabledBtn, modalHandler) {
    document
      .querySelector('#root-goods')
      .addEventListener('click', addProductToCart);
    document
      .querySelector('#root-sort')
      .addEventListener('click', setDisabledBtn);
    document
      .querySelector('#modal-overflow')
      .addEventListener('click', modalHandler);
  }

  renderCart() {
    document.querySelector('#root-modal-cart').innerHTML = `
    <div id="modal-overflow" uk-modal>
      <div class="uk-modal-dialog">
        <button class="uk-modal-close-default" type="button" uk-close></button>
          <div class="uk-modal-header">
              <h2 class="uk-modal-title">Cart</h2>
          </div>
            <div class="uk-modal-body" uk-overflow-auto>
              <div class="uk-overflow-auto">
                <table class="uk-table uk-table-hover uk-table-middle uk-table-divider">
                  <tbody id="listInCart"></tbody>
                </table>
              </div>
            </div>
          <div class="uk-modal-footer uk-text-right">
          <button class="uk-button uk-button-default uk-modal-close" type="button">
             Continue shopping
          </button>
          <button class="uk-button uk-button-primary" id="buy-btn" href="#modal-sections" uk-toggle
          >buy</button></>
    </div>
    </div>`;
  }

  renderListInCart(cart) {
    const localCart = cart || JSON.parse(localStorage.getItem('cart'));
    const data = JSON.parse(localStorage.getItem('goods'));

    let str = '';
    for (const key in localCart) {
      data.forEach(elem => {
        if (elem.id === Number(key)) {
          str += `
    <tr>
      <td>
        <button class="cart-btns delete" data-art="${key}">x</button>
          <img class="uk-preserve-width uk-border-circle cart-img" src="data/img/pets/${
            elem.type
          }/${elem.name}.jpg" width="40" alt="">
            <p class="uk-text-truncate">Breed: ${elem.name}</p>
            <p class="uk-text-truncate">Price: ${elem.price} USD</p>
            <button class="cart-btns minus" data-art="${key}">-</button>
            <p class="uk-text-truncate">${localCart[key]}</p>
            <button class="cart-btns plus" data-art="${key}">+</button>
            <p class="uk-text-truncate">${localCart[key] * elem.price} USD</p>
       </td>
    </tr>`;
        }
      });
    }
    document.querySelector('#listInCart').innerHTML = str;
  }
}
