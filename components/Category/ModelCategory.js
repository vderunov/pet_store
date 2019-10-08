export default class ModelCategory {
  makeCategory(pet, showCategory) {
    const data = JSON.parse(localStorage.getItem('goods'));
    const collectionPet = [];

    if (pet === 'all') {
      return showCategory(data);
    }

    data.forEach(elem => {
      if (elem.type === pet) {
        collectionPet.push(elem);
      }
    });

    showCategory(collectionPet);
  }

  addCategoryToLocalStorage(collectionPet) {
    localStorage.setItem('category', JSON.stringify(collectionPet));
  }
}
