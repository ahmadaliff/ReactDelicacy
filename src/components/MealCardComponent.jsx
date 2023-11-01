import { Button, Card } from "@mui/material";
import React from "react";
import Styles from "../styles/style.module.scss";
import { useNavigate } from "react-router-dom";
import { handleDelFav } from "../function/handleFavorit";

const MealCardComponent = ({ size = "small", data, refreshPage }) => {
  const navigate = useNavigate();
  return (
    <div
      className={
        size === "small" ? Styles.smallMealCardWrap : Styles.MealCardWrap
      }
    >
      <Card
        className={Styles.MealCard}
        onClick={() => navigate(`/detail/${data?.idMeal}`)}
      >
        <img src={data?.strMealThumb} alt={data?.strMeal} />
        <div className={Styles.MealCardTextWrap}>
          <p>{data?.strMeal}</p>
        </div>
      </Card>
      {size !== "small" && (
        <Button
          variant="outlined"
          onClick={() => {
            handleDelFav({ data: data });
            refreshPage();
          }}
          className={Styles.buttonRemove}
        >
          Remove Favorite
        </Button>
      )}
    </div>
  );
};

export default MealCardComponent;
