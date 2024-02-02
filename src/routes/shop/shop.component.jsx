import { Routes, Route } from "react-router-dom";
import "./shop.styles.scss";
import Category from "../../components/category/category.component";
import Categories from "../../components/categories/categories.component";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<Categories></Categories>}></Route>
      <Route path="/:category" element={<Category></Category>}></Route>
    </Routes>
    //
  );
};
export default Shop;
