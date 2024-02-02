import { useContext, Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../product-card/product-card.component";

import "./category.styles.scss";

const Category = () => {
  const { category } = useParams();
  const { categoryMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(null)
  useEffect( () => {
      setProducts(categoryMap[category])
  }, [category, categoryMap])
  return (
    <div className="category-page-container">
        <h1 className="title">
          <span>{category.toUpperCase()}</span>
        </h1>
        <div className="products-container">
          { products && products
            .map((product) => {
              return (
                <ProductCard key={product.id} product={product}></ProductCard>
              );
            })}
        </div>
    </div>
  );
};
export default Category;
