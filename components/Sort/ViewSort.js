export default class ViewSort {
  constructor(contr) {
    this.controller = contr;
  }

  render() {
    document.querySelector('#sort').innerHTML = `
    <button class="uk-button uk-button-default uk-button-small uk-margin-small-left" data-btn="up">price increase</button>
    <button class="uk-button uk-button-default uk-button-small" data-btn="down">price decrease</button>
    <button class="uk-button uk-button-default uk-button-small" data-btn="quantity">quantity switching</button>
  
    <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
    <label><input class="uk-checkbox" type="checkbox" checked> A</label>
    <label><input class="uk-checkbox" type="checkbox"> B</label>
    <button class="uk-button uk-button-default uk-button-small">apply</button>
    </div>
    `;
  }

  addEventOnNav() {
    document
      .querySelector('[data-btn="up"]')
      .addEventListener('click', this.controller.sortBy.bind(this.controller));
    document
      .querySelector('[data-btn="down"]')
      .addEventListener('click', this.controller.sortBy.bind(this.controller));
    document
      .querySelector('[data-btn="quantity"]')
      .addEventListener('click', this.controller.sortBy.bind(this.controller));
  }
}
