import { useState, createContext, useEffect } from "react";
// import SHOP_DATA from "./shop-data.js";
// import { addCollection } from "../utils/firebase/firebase.util.js";
import { getDocuments } from "../utils/firebase/firebase.util.js";

export const CategoriesContext = createContext({
    categoryMap : [],
    setCategoryMap : () => {},
});
export const CategoriesProvider = ({ children }) => {
  const [categoryMap, setCategoryMap] = useState([]);
  // useEffect(() => {
  //   addCollection('categories', SHOP_DATA)
  // }, [])
  useEffect(() => {
    const getCategories = async () => {
      const categoryMap = await getDocuments()
      console.log(categoryMap)
      setCategoryMap(categoryMap)
    }
    getCategories()
  }, [])
  const value = { categoryMap, setCategoryMap };
  return (
    <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
  );
};
