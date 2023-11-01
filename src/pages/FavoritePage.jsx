import React, { useLayoutEffect, useState } from "react";
import Styles from "../styles/style.module.scss";
import MealCardComponent from "../components/MealCardComponent";
import { getFavorite } from "../function/handleFavorit";

const FavoritePage = () => {
  const [favoriteMeal, setFavoriteMeal] = useState();
  const [refresh, setRefresh] = useState(false);
  useLayoutEffect(() => {
    setFavoriteMeal(getFavorite());
  }, [refresh]);
  return (
    <div className={`${Styles.homePageWrap} ${Styles.detailPage}`}>
      {console.log(favoriteMeal)}
      {favoriteMeal?.length > 0 ? (
        favoriteMeal?.map((val, key) => (
          <MealCardComponent
            data={val}
            size="medium"
            key={key}
            refreshPage={() => setRefresh(!refresh)}
          />
        ))
      ) : (
        <>No Favorite Meal</>
      )}
    </div>
  );
};

export default FavoritePage;
