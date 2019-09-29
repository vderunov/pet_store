// import Templater from '../../src/Templater.js';

export default class ViewCategory {
  constructor(contr) {
    // this.templater = new Templater('../components/Category/Category.html');
    this.controller = contr;
  }

  render() {
    document.querySelector('#category').innerHTML = `
        <ul class="uk-breadcrumb uk-padding-small">
             <li><button class="uk-button uk-button-default" data-pet="cats">Cats</button></li>
          <li><button class="uk-button uk-button-default" data-pet="dogs">Dogs</button></li>
          <li><button class="uk-button uk-button-default" data-pet="fish">Fish</button></li>
          <li><button class="uk-button uk-button-default" data-pet="birds">Birds</button></li>
          <li><button class="uk-button uk-button-default" data-pet="all">All</button></li>
          </ul>
          <button class="uk-button uk-button-default" href="#modal-overflow" uk-toggle>
          <img src="./data/img/icon_cart_empty.svg" alt="icon_cart_empty" class="cart" />
    </button>
        `;
    // this.templater.load(null, document.querySelector('#category'));
  }

  addEventOnNav() {
    document
      .querySelector('#category')
      .addEventListener(
        'click',
        this.controller.choosePet.bind(this.controller)
      );
  }
}
