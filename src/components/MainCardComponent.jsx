import React, { useEffect, useState } from "react";
import Styles from "../styles/style.module.scss";
import { Button, Card, CardMedia } from "@mui/material";
import IngridientsCard from "./IngridientsCard";
import { useNavigate } from "react-router-dom";
import {
  handleDelFav,
  handleFavorite,
  isFavorite,
} from "../function/handleFavorit";

const MainCardComponent = ({ data, isHomePage = true }) => {
  const [refresh, setRefresh] = useState(false);
  const [isFav, setIsFav] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setIsFav(isFavorite({ data: data }));
  }, [refresh]);
  return (
    <div className={Styles.mainCard}>
      <div className={Styles.cardWrap}>
        <Card className={Styles.Card}>
          <div className={Styles.cardContent}>
            <div className={Styles.CardContentText}>
              <h2>{data?.strMeal}</h2>
              <p>{data?.strInstructions}</p>
            </div>
            <h3>Ingredients</h3>
            <div className={Styles.ingridientsWrap}>
              <IngridientsCard
                title={data?.strIngredient1}
                text={data?.strMeasure1}
              />
              <IngridientsCard
                title={data?.strIngredient2}
                text={data?.strMeasure2}
              />
              <IngridientsCard
                title={data?.strIngredient3}
                text={data?.strMeasure3}
              />
              <IngridientsCard
                title={data?.strIngredient4}
                text={data?.strMeasure4}
              />
            </div>
            <div className={Styles.buttonWrap}>
              {isHomePage && (
                <Button
                  variant="outlined"
                  onClick={() => navigate(`/detail/${data?.idMeal}`)}
                >
                  Detail
                </Button>
              )}
              {isFav ? (
                <Button
                  variant="outlined"
                  onClick={() => {
                    handleDelFav({ data: data });
                    setRefresh(!refresh);
                  }}
                  sx={{ color: "red" }}
                >
                  delele from fav
                </Button>
              ) : (
                <Button
                  variant="outlined"
                  onClick={() => {
                    handleFavorite({ data: data });
                    setRefresh(!refresh);
                  }}
                >
                  Add to favorites
                </Button>
              )}
            </div>
          </div>
        </Card>
      </div>
      <CardMedia
        component="img"
        className={Styles.mainCardImage}
        sx={{ width: 151 }}
        image={data?.strMealThumb}
        alt={data?.strMeal}
        loading="lazy"
      />
    </div>
  );
};

export default MainCardComponent;
