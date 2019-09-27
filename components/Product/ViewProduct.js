export class ViewProduct {
  constructor(contr) {
    this.controller = contr;
  }

  render(data) {
    let str = '';
    data.forEach(elem => {
      str += `
        <div class="card">
          <div class="card-image">
            <img src="${elem.url}">
            <h1 class="card-title">${elem.name}</h1>
         </div>
          <div class="card-content">
          <span class="card-title">Price: ${elem.price} USD</span>
          <span class="card-title">Gender: ${elem.gender}</span>
          <span class="card-title">Quantity: ${elem.quantity}</span>
       </div>
          <div class="card-action">
          <a class="waves-effect waves-light btn-small">Buy</a>
          </div>
      </div>
       `;
    });
    document.querySelector('#goods').innerHTML = str;
  }
}
