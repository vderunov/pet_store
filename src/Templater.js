export default class Templater {
  constructor(link) {
    fetch(link)
      .then(response => response.text())
      .then(result => {
        this.template = result;
      });
  }

  load(objProduct, domNode) {
    const node = domNode;
    let stringHTML = this.template;

    for (const key in objProduct) {
      const regexp = new RegExp(`{{ ${key} }}`, 'gi');
      stringHTML = stringHTML.replace(regexp, objProduct[key]);
    }
    node.innerHTML += stringHTML;
  }
}
