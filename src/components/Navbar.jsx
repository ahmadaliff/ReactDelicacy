import React, { useLayoutEffect, useState } from "react";
import Styles from "../styles/style.module.scss";
import { Link, useLocation } from "react-router-dom";
import callAPI from "../domain/Api";

const Navbar = ({ setDefaultCategory }) => {
  const [category, setCategory] = useState();
  const location = useLocation();
  useLayoutEffect(() => {
    getCategory();
  }, []);
  const getCategory = async () => {
    try {
      const response = await callAPI({ endpoint: "/categories.php" });
      setCategory(response?.categories?.slice(0, 5));
      setDefaultCategory(response?.categories[0]?.strCategory);
    } catch (error) {
      alert(error?.message);
    }
  };
  return (
    <nav className={Styles.navComp}>
      <div className={Styles.logo}>Delicacy</div>
      <ul className={Styles.navLinkWrap}>
        {category?.map((val, key) => (
          <li key={key}>
            <Link
              to={`/category/${val?.strCategory}`}
              className={
                location.pathname === `/category/${val?.strCategory}`
                  ? Styles.active
                  : ""
              }
            >
              {val?.strCategory}
            </Link>
          </li>
        ))}
        <li>
          <Link
            to={"/favorit"}
            className={location.pathname === `/favorit` ? Styles.active : ""}
          >
            Favorit
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
