import React from "react";
import ingridientIcon from "../assets/olive-oil 1.png";
import Styles from "../styles/style.module.scss";
import { Icon } from "@mui/material";
const IngridientsCard = ({ title, text }) => {
  return (
    <div className={Styles.ingridient}>
      <Icon className={Styles.labelIngridient}>
        <img src={ingridientIcon} className={Styles.imageIngridient} />
      </Icon>
      <div className={Styles.labelText}>
        <p className={Styles.ingridientTitle}>{title}</p>
        <p className={Styles.ingridientText}>{text}</p>
      </div>
    </div>
  );
};

export default IngridientsCard;
