import { Fragment, useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";

import CategoryPreview from "../category-preview/category-preview.component";
import "./categories.styles.scss";

const Categories = () => {
  const { categoryMap } = useContext(CategoriesContext);
  return (
    <Fragment>
      {Object.keys(categoryMap).map((title) => {
        const products = categoryMap[title];
        return (
          <CategoryPreview title={title} products={products}></CategoryPreview>
        );
      })}
    </Fragment>
  );
};
export default Categories;
