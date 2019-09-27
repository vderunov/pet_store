export default class ViewCategory {
  constructor(contr) {
    this.controller = contr;
  }

  render() {
    document.querySelector('#category').innerHTML = `
      <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo"><i class="large material-icons">insert_emoticon</i></a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="#" data-pet="cats" class="waves-effect waves-light btn">Cats</a></li>
          <li><a href="#" data-pet="dogs" class="waves-effect waves-light btn">Dogs</a></li>
          <li><a href="#" data-pet="fish" class="waves-effect waves-light btn">Fish</a></li>
          <li><a href="#" data-pet="birds" class="waves-effect waves-light btn">Birds</a></li>
          <li><a href="#" data-pet="all" class="waves-effect waves-light btn">all</a></li>
        </ul>
      </div>
    </nav>
       `;
  }

  addEventOnNav() {
    document
      .querySelector('nav')
      .addEventListener(
        'click',
        this.controller.choosePet.bind(this.controller)
      );
  }
}
