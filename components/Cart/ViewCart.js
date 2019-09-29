export default class ViewCart {
  constructor(contr) {
    this.controller = contr;
    this.init();
  }

  addHandlerToBuyBtns() {
    document
      .querySelector('#goods')
      .addEventListener(
        'click',
        this.controller.getProductId.bind(this.controller)
      );
  }

  init() {
    this.renderCart();
    this.renderListInCart();
    this.addModalHandler();
    this.cart = document.querySelector('.cart');
    this.controller.checkCart();
    if (localStorage.getItem('cart')) {
      this.cart.src = './data/img/icon_cart_full.svg';
    }
  }

  renderCart() {
    let str = '';
    str += `
      <div id="modal-overflow" uk-modal>
      <div class="uk-modal-dialog">
        <button class="uk-modal-close-default" type="button" uk-close></button>
        <div class="uk-modal-header">
          <h2 class="uk-modal-title">Cart</h2>
        </div>
        <div class="uk-modal-body" uk-overflow-auto>
        <div class="uk-overflow-auto">
        <table class="uk-table uk-table-hover uk-table-middle uk-table-divider">
            <tbody id="listInCart">`;
    str += ` 
    </tbody>
    </table>
</div>
    </div>
    <div class="uk-modal-footer uk-text-right">
      <button
        class="uk-button uk-button-default uk-modal-close"
        type="button"
      >
      Continue shopping
      </button>
      <button class="uk-button uk-button-primary" type="button">
      Buy
      </button>
    </div>
  </div>
</div>`;
    document.querySelector('#modal-root').innerHTML = str;
  }

  renderListInCart(cart) {
    this.localCart = cart || JSON.parse(localStorage.getItem('cart'));
    this.data = JSON.parse(localStorage.getItem('goods'));

    let str = '';
    for (const key in this.localCart) {
      this.data.forEach(elem => {
        if (elem.id === Number(key)) {
          str += `<tr>
            <td>
            <button class="cart-btns"><img src="./data/img/icon_del.svg" alt="icon-del" class="delete" data-art="${key}" /></button>
        <img class="uk-preserve-width uk-border-circle cart-img" src="../../data/img/pets/${
          elem.type
        }/${elem.name}.jpg" width="40" alt="">
            <p class="uk-text-truncate">Breed: ${elem.name}</p>
            <p class="uk-text-truncate">Price: ${elem.price} USD</p>
            <button class="cart-btns"><img src="./data/img/icon_minus.svg" alt="icon-del" data-art="${key}" class="minus" /></button>
            <p class="uk-text-truncate">${this.localCart[key]}</p>
            <button class="cart-btns"><img src="./data/img/icon_plus.svg" alt="icon-plus" data-art="${key}" class="plus" /></button>
            <p class="uk-text-truncate">${this.localCart[key] *
              elem.price} USD</p>
         </td>
    </tr>`;
        }
      });
    }
    document.querySelector('#listInCart').innerHTML = str;
  }

  addModalHandler() {
    document
      .querySelector('#modal-overflow')
      .addEventListener(
        'click',
        this.controller.modalHandler.bind(this.controller)
      );
  }
}
