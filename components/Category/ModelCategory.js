export default class ModelCategory {
  makeCategory(pet) {
    const data = JSON.parse(localStorage.getItem('goods'));
    const collectionPet = [];

    if (pet === 'all') {
      return data;
    }

    data.forEach(elem => {
      if (elem.type === pet) {
        collectionPet.push(elem);
      }
    });

    return collectionPet;
  }

  addCategoryToLocalStorage(collectionPet) {
    localStorage.setItem('category', JSON.stringify(collectionPet));
  }
}
