import { Fragment } from "react";
import { useSelector } from "react-redux";

import { categoryMapSelector } from "../../store/categories/categories.selector";
import CategoryPreview from "../category-preview/category-preview.component";

import "./categories.styles.scss";

const Categories = () => {
  // const { categoryMap } = useContext(CategoriesContext);
  const categoryMap = useSelector(categoryMapSelector)

  return (
    <Fragment>
      {categoryMap && Object.keys(categoryMap).map((title) => {
        const products = categoryMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products}></CategoryPreview>
        );
      })}
    </Fragment>
  );
};
export default Categories;
