export const handleFavorite = ({ data }) => {
  let arrFavMeal = localStorage.getItem("favorite");
  if (arrFavMeal) {
    let tempArr = JSON.parse(arrFavMeal);
    const filter = tempArr.filter((val) => val.idMeal == data.idMeal);
    if (filter.length === 0) {
      tempArr.push(data);
      localStorage.setItem(
        "favorite",
        JSON.stringify(Array.from(new Set(tempArr)))
      );
    }
  } else {
    localStorage.setItem("favorite", JSON.stringify([data]));
  }
};
export const handleDelFav = ({ data }) => {
  let arrFavMeal = localStorage.getItem("favorite");
  if (arrFavMeal) {
    let tempArr = JSON.parse(arrFavMeal);
    const filteredArr = tempArr.filter((val) => val.idMeal != data.idMeal);
    localStorage.setItem("favorite", JSON.stringify(filteredArr));
  }
};
export const isFavorite = ({ data }) => {
  let arrFavMeal = localStorage.getItem("favorite");
  if (arrFavMeal) {
    let tempArr = JSON.parse(arrFavMeal);
    const filteredArr = tempArr.filter((val) => val.idMeal == data.idMeal);
    return filteredArr.length > 0;
  }
  return false;
};
export const getFavorite = () => {
  return JSON.parse(localStorage.getItem("favorite"));
};
