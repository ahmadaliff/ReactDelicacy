import React, { useLayoutEffect, useState } from "react";
import Styles from "../styles/style.module.scss";
import { useParams } from "react-router-dom";
import callAPI from "../domain/Api";
import MainCardComponent from "../components/MainCardComponent";
import MoreRecipes from "../components/MoreRecipes";

const DetailPage = () => {
  const { id } = useParams();
  const [detailMeal, setDetailMeal] = useState();
  useLayoutEffect(() => {
    getDetailMeal();
  }, [id]);
  const getDetailMeal = async () => {
    try {
      const response = await callAPI({
        endpoint: `/lookup.php?i=${id}`,
      });
      setDetailMeal(response?.meals[0]);
    } catch (error) {}
  };
  return (
    <>
      {detailMeal ? (
        <div className={`${Styles.homePageWrap} ${Styles.detailPage}`}>
          <div className={Styles.mainCardsWrap}>
            <MainCardComponent data={detailMeal} isHomePage={false} />
          </div>
          <MoreRecipes />
        </div>
      ) : (
        <div className={Styles.loading}>Loading ...</div>
      )}
    </>
  );
};

export default DetailPage;
