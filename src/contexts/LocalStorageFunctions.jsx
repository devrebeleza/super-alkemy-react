const removeItemFromArr = (arr, id) => {
  return arr.filter((e) => e.id !== id);
};

export const getLocalStorage = (nameStorage) => {
  let listStorageFavorite = [];
  if (localStorage.getItem(nameStorage)) {
    listStorageFavorite = [...JSON.parse(localStorage.getItem(nameStorage))];
  }
  return listStorageFavorite;
};

export const setUnsetElementLocalStorage = (nameStorage, hero) => {
  let listStorageFavorite = [];
  listStorageFavorite = getLocalStorage(nameStorage);

  if (hero.selected) {
    listStorageFavorite.push(hero);
  } else {
    listStorageFavorite = removeItemFromArr(listStorageFavorite, hero.id);
  }
  //
  localStorage.removeItem(nameStorage);
  localStorage.setItem(nameStorage, JSON.stringify(listStorageFavorite));
};

export const canSetElementLocalStorage = (nameStorage, hero) => {
  let listStorageFavorite = [];
  listStorageFavorite = getLocalStorage(nameStorage);

  if (listStorageFavorite.length === 6) return "The Team is Complete";

  const listFilter = listStorageFavorite.filter(
    (element) => element.biography.alignment === hero.biography.alignment
  );
  console.log(listFilter.length);
  if (listFilter.length === 3)
    return `You have "${hero.biography.alignment}" alignment complete `;

  return true;
};
