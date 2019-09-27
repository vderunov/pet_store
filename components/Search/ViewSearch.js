export class ViewSearch {
  constructor(contr) {
    this.controller = contr;
  }

  render() {
    document.querySelector('#root-search').innerHTML = `
    <nav>
    <div class="nav-wrapper">
      <form>
        <div class="input-field">
          <input id="search" type="search">
          <label class="label-icon" for="search"><i class="material-icons">search</i></label>
          <i class="material-icons">close</i>
        </div>
      </form>
    </div>
  </nav>
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
