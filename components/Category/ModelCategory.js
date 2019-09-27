export class ModelCategory {
  constructor(contr) {
    this.controller = contr;
  }

  makeCategory(pet) {
    const data = JSON.parse(localStorage.getItem('goods'));
    const collectionPet = [];

    if (pet === 'all') {
      return this.controller.showCategory(data);
    }

    data.forEach(elem => {
      if (elem.type === pet) {
        collectionPet.push(elem);
      }
    });
    this.controller.showCategory(collectionPet);
  }
}
