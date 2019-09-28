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
        this.controller.addToLocalStorageCart.bind(this.controller)
      );
  }

  init() {
    this.cart = document.querySelector('.cart');
    this.controller.checkCart();
    if (localStorage.getItem('cart')) {
      // this.cart.src = './data/img/fullcart.png';
    }
    this.renderCart();
  }

  renderCart(cart) {
    document.querySelector('#modal-root').innerHTML = `
    <div id="modal-example" uk-modal>
    <div class="uk-modal-dialog uk-modal-body">
        <h2 class="uk-modal-title">Headline</h2>
        <p>Lorem ipsum dolor anim id est laborum.</p>
        <p class="uk-text-right">
            <button class="uk-button uk-button-default uk-modal-close" type="button">Cancel</button>
            <button class="uk-button uk-button-primary" type="button">Save</button>
        </p>
    </div>
</div>
          `;
  }
}
