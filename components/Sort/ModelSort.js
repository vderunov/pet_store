export default class ModelSort {
  constructor() {
    this.collectionPet = [];
  }

  sortUp(goods, showSortByPrice) {
    showSortByPrice(goods.sort((a, b) => (a.price > b.price ? 1 : -1)));
  }

  sortDown(goods, showSortByPrice) {
    showSortByPrice(goods.sort((a, b) => (a.price < b.price ? 1 : -1)));
  }

  sortQuantity(goods, showSortByPrice) {
    if (this.i) {
      showSortByPrice(goods.sort((a, b) => (a.quantity < b.quantity ? 1 : -1)));
      this.i = false;
    } else {
      showSortByPrice(goods.sort((a, b) => (a.quantity > b.quantity ? 1 : -1)));
      this.i = true;
    }
  }

  makeSetProperties(prop1, prop2, data, initCheckbox, delCheckbox) {
    const setProp1 = new Set();
    const setProp2 = new Set();
    const objCheckBoxProp = {
      [prop1]: setProp1,
      [prop2]: setProp2
    };

    this.collectionPet = [];

    if (prop1 === 'all') {
      return delCheckbox();
    }

    data.forEach(elem => {
      if (typeof elem[prop1] === 'object') {
        for (let i = 0; i < elem[prop1].length; i += 1) {
          setProp1.add(elem[prop1][i]);
        }
      } else {
        setProp1.add(elem[prop1]);
      }

      if (typeof elem[prop2] === 'object') {
        for (let i = 0; i < elem[prop1].length; i += 1) {
          setProp2.add(elem[prop2][i]);
        }
      } else {
        setProp2.add(elem[prop2]);
      }
    });
    initCheckbox(objCheckBoxProp, data);
  }

  addCheckBox(objCheckBoxProp, showSortByPrice) {
    const dataLocal = JSON.parse(localStorage.getItem('category'));
    const arr = [];

    for (const key in objCheckBoxProp) {
      dataLocal.forEach(elem => {
        switch (true) {
          case Array.isArray(elem[key]):
            elem[key].forEach(el => {
              if (el === objCheckBoxProp[key]) {
                this.collectionPet.push(elem);
              }
            });
            break;
          case Number(objCheckBoxProp[key]) &&
            elem[key] === Number(objCheckBoxProp[key]):
            this.collectionPet.push(elem);
            break;
          case elem[key] === objCheckBoxProp[key]:
            this.collectionPet.push(elem);
            break;
          case typeof elem[key] === 'boolean' &&
            String(elem[key]) === objCheckBoxProp[key]:
            this.collectionPet.push(elem);
            break;
        }
      });
    }

    this.collectionPet.forEach(elem => {
      if (!arr.find(e => e.id === elem.id)) {
        arr.push(elem);
      }
    });

    this.collectionPet = arr;
    showSortByPrice(this.collectionPet);
  }

  delCheckBox(objCheckBoxProp, showSortByPrice) {
    const dataLocal = JSON.parse(localStorage.getItem('category'));
    const arr = new Set([]);

    for (const key in objCheckBoxProp) {
      this.collectionPet.forEach(elem => {
        switch (true) {
          case Array.isArray(elem[key]):
            elem[key].forEach(el => {
              if (el === elem[key]) {
                arr.add(elem);
              }
            });
            break;
          case Number(objCheckBoxProp[key]) &&
            elem[key] !== Number(objCheckBoxProp[key]):
            arr.add(elem);
            break;
          case typeof elem[key] !== 'boolean' &&
            !isFinite(objCheckBoxProp[key]) &&
            elem[key] !== objCheckBoxProp[key]:
            arr.add(elem);
            break;
          case typeof elem[key] === 'boolean' &&
            String(elem[key]) !== objCheckBoxProp[key]:
            arr.add(elem);
            break;
        }
      });
      this.collectionPet = [];
    }
    this.collectionPet = [...arr];

    if (this.collectionPet.length) {
      showSortByPrice(this.collectionPet);
    } else {
      showSortByPrice(dataLocal);
    }
  }
}
