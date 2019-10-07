export default class ModelSearch {
  makeSortByInput(letters, showSortByInput) {
    const val = letters.trim();
    const data = JSON.parse(localStorage.getItem('category'));

    const collectionPet = [];
    if (val !== '') {
      const regexp = new RegExp(`\\b${val}`, 'gi');

      data.forEach(elem => {
        if (regexp.test(elem.name)) {
          collectionPet.push(elem);
        }
      });
      showSortByInput(collectionPet);
    } else {
      data.forEach(elem => {
        collectionPet.push(elem);
      });

      showSortByInput(collectionPet);
    }
  }
}
