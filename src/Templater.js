export default class Templater {
  constructor(link) {
    this.elements = [];
    this.isCatch = false;
    this.isLoad = false;

    fetch(link)
      .then(response => response.text())
      .then(result => {
        this.template = result;
        this.isLoad = true;
        this.isCatch ? this.render() : null;
      });
  }

  load(objProduct, domNode, selector, event, fn) {
    if (this.isLoad) {
      this.show(objProduct, domNode);
    } else {
      this.isCatch = true;
      this.elements.push({
        objProduct,
        domNode,
        selector,
        event,
        fn
      });
    }
  }

  render() {
    this.elements.forEach(({ objProduct, domNode, selector, event, fn }) => {
      this.show(objProduct, domNode, selector, event, fn);
    });
  }

  show(objProduct, domNode, selector, event, fn) {
    const node = domNode;
    let stringHTML = this.template;
    for (const key in objProduct) {
      const regexp = new RegExp(`{{ ${key} }}`, 'gi');
      stringHTML = stringHTML.replace(regexp, objProduct[key]);
    }
    node.innerHTML += stringHTML;
    this.addHandlers(selector, event, fn);
  }

  addHandlers(selectors = [], event, fn) {
    if (selectors.length) {
      selectors.forEach(elem => {
        const node = document.querySelector(elem);
        node.addEventListener(event, fn);
      });
    }
  }
}

// node.addEventListener(event, function listener() {
//   // do something
//   console.log(this);
//   fn().bind(this);
//   element.removeEventListener(event, listener);
// });
