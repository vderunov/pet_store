export default class ModelSort {
  constructor(contr) {
    this.controller = contr;
    this.collectionPet = [];
  }

  sortUp(goods) {
    this.controller.showSortByPrice(
      goods.sort((a, b) => (a.price > b.price ? 1 : -1))
    );
  }

  sortDown(goods) {
    this.controller.showSortByPrice(
      goods.sort((a, b) => (a.price < b.price ? 1 : -1))
    );
  }

  sortQuantity(goods) {
    if (this.i) {
      this.controller.showSortByPrice(
        goods.sort((a, b) => (a.quantity < b.quantity ? 1 : -1))
      );
      this.i = false;
    } else {
      this.controller.showSortByPrice(
        goods.sort((a, b) => (a.quantity > b.quantity ? 1 : -1))
      );
      this.i = true;
    }
  }

  makeSetProperties(prop1, prop2, data) {
    const setProp1 = new Set();
    const setProp2 = new Set();
    const obj = {
      [prop1]: setProp1,
      [prop2]: setProp2
    };

    if (prop1 === 'all') {
      return this.controller.delCheckbox();
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

    this.controller.initCheckbox(obj, data);
  }

  addCheckBox(obj, data) {
    const arr = [];

    for (const key in obj) {
      data.forEach(elem => {
        if (String(elem[key]) === String(obj[key])) {
          this.collectionPet.push(elem);
        }
      });
    }

    this.collectionPet.forEach(elem => {
      if (!arr.find(e => e.id === elem.id)) {
        arr.push(elem);
      }
    });

    this.collectionPet = arr;
    this.controller.showSortByPrice(this.collectionPet);
  }

  delCheckBox(obj, dataCategoryLocalStorage) {
    const arr = new Set([]);
    for (const key in obj) {
      this.collectionPet.map(elem => {
        if (String(elem[key]) !== String(obj[key])) {
          arr.add(elem);
        }
      });
      this.collectionPet = [];
    }
    this.collectionPet = [...arr];

    if (this.collectionPet.length) {
      this.controller.showSortByPrice(this.collectionPet);
    } else {
      this.controller.showSortByPrice(dataCategoryLocalStorage);
    }
  }
}
