export default class ViewSearch {
  constructor(contr) {
    this.controller = contr;
  }

  render() {
    document.querySelector('#root-search').innerHTML = `
    <div class="uk-margin uk-padding-small">
    <form class="uk-search uk-search-default">
        <span uk-search-icon></span>
        <input id="search" class="uk-search-input" type="search" placeholder="Search...">
    </form>
</div>
          `;
  }

  addEventOnSearch() {
    document
      .querySelector('#search')
      .addEventListener(
        'input',
        this.controller.sortByInput.bind(this.controller)
      );
  }
}
