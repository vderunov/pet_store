export default class Templater {
  constructor(link) {
    fetch(link)
      .then(response => response.text())
      .then(result => {
        this.template = result;
      });
  }

  load(objProduct, domNode) {
    let stringHTML = this.template;
    for (const key in objProduct) {
      stringHTML = stringHTML.replace(`{{ ${key} }}`, objProduct[key]);
    }
    domNode.innerHTML += stringHTML;
  }
}
