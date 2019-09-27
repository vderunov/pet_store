export default class ViewSort {
  constructor(contr) {
    this.controller = contr;
  }

  render() {
    document.querySelector('#sort').innerHTML = `
    <a class="waves-effect waves-light btn-small"><i class="material-icons right">arrow_drop_up</i>Sort by price</a>
    <a class="waves-effect waves-light btn-small"><i class="material-icons right">arrow_drop_down</i>Sort by price</a>
       `;
  }

  // addEventOnNav() {
  //   document
  //     .querySelector('nav')
  //     .addEventListener(
  //       'click',
  //       this.controller.choosePet.bind(this.controller)
  //     );
  // }
}
