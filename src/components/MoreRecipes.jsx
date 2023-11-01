import React, { useLayoutEffect, useState } from "react";
import callAPI from "../domain/Api";
import MealCardComponent from "./MealCardComponent";
import Styles from "../styles/style.module.scss";

const MoreRecipes = () => {
  const [moreRecipes, setMoreRecipes] = useState();
  useLayoutEffect(() => {
    getRandomMeal();
  }, []);
  const getRandomMeal = async () => {
    try {
      const response = await callAPI({ endpoint: "/search.php?s=A" });
      setMoreRecipes(response?.meals?.slice(0, 10));
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className={Styles.moreRecipesComp}>
      <h3>More Recipes</h3>
      <div className={Styles.wrap}>
        <div className={Styles.moreRecipesWrap}>
          {moreRecipes?.map((val, key) => (
            <MealCardComponent data={val} key={key} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoreRecipes;
