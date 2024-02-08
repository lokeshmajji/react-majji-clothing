import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import "./category.styles.scss";

import ProductCard from "../product-card/product-card.component";
import Spinner from "../spinner/spinner.component";
import { categoryMapSelector, categoryIsLoadingSelector } from "../../store/categories/categories.selector";

const Category = () => {
  console.log("rendering/re-rendering categories component");
  const { category } = useParams();
  const categoryMap = useSelector(categoryMapSelector);
  const categoryIsLoading = useSelector(categoryIsLoadingSelector);
  const [products, setProducts] = useState(null);
  useEffect(() => {
    setProducts(categoryMap[category]);
  }, [category, categoryMap]);
  return (
    <Fragment>
      {categoryIsLoading ? (
        <Spinner />
      ) : (
        <div className="category-page-container">
          <h1 className="title">
            <span>{category.toUpperCase()}</span>
          </h1>
          <div className="products-container">
            {products &&
              products.map((product) => {
                return (
                  <ProductCard key={product.id} product={product}></ProductCard>
                );
              })}
          </div>
        </div>
      )}
    </Fragment>
  );
};
export default Category;
