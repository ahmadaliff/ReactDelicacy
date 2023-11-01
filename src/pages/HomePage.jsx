import React, { useLayoutEffect, useState } from "react";
import Styles from "../styles/style.module.scss";
import MainCardComponent from "../components/MainCardComponent";
import callAPI from "../domain/Api";
import { useParams } from "react-router-dom";
import MoreRecipes from "../components/MoreRecipes";
const HomePage = () => {
  const { category } = useParams();
  const [mealsDetailByCategory, setMealsDetailByCategory] = useState([]);
  useLayoutEffect(() => {
    getCategory();
    return () => setMealsDetailByCategory([]);
  }, [category]);
  const getCategory = async () => {
    try {
      const responseMealByCategory = await callAPI({
        endpoint: `/filter.php?c=${category}`,
      });
      const slicedResponse = responseMealByCategory.meals.slice(0, 5);
      slicedResponse.map(async (val) => {
        const respDetailMeals = await callAPI({
          endpoint: `/lookup.php?i=${val?.idMeal}`,
        });
        setMealsDetailByCategory((prev) => [...prev, respDetailMeals.meals[0]]);
      });
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <>
      {mealsDetailByCategory.length > 0 ? (
        <div className={Styles.homePageWrap}>
          <div className={Styles.mainCardsWrap}>
            {mealsDetailByCategory?.map((val, key) => (
              <MainCardComponent data={val} key={key} />
            ))}
          </div>
          <MoreRecipes />
        </div>
      ) : (
        <div className={Styles.loading}>Loading ...</div>
      )}
    </>
  );
};

export default HomePage;
