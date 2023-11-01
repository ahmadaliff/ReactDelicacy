import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Styles from "./styles/style.module.scss";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import { useState } from "react";
import DetailPage from "./pages/DetailPage";
import FavoritePage from "./pages/FavoritePage";
function App() {
  const [defaultCategory, setDefaultCategory] = useState();
  return (
    <main className={Styles.main}>
      <BrowserRouter>
        <Navbar setDefaultCategory={setDefaultCategory} />
        <Routes>
          <Route
            path="/"
            element={
              <Navigate
                to={defaultCategory && `/category/${defaultCategory} `}
              />
            }
          />
          <Route path="/category/:category" element={<HomePage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/favorit" element={<FavoritePage />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
