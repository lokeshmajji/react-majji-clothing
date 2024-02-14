import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Category from "../../components/category/category.component";
import Categories from "../../components/categories/categories.component";

import {
  fetchCategoryArrayStart,
} from "../../store/categories/categories.action";

import "./shop.styles.scss";

const Shop = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchCategoryArrayStart());
  }, []);

  return (
    <Routes>
      <Route index element={<Categories></Categories>}></Route>
      <Route path="/:category" element={<Category></Category>}></Route>
    </Routes>
    //
  );
};
export default Shop;
