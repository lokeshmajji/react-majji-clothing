import { useNavigate } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";
import "./category-preview.styles.scss";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { categoryIsLoadingSelector } from "../../store/categories/categories.selector";
import Spinner from "../spinner/spinner.component";

const CategoryPreview = ({ title, products }) => {
  const navigate = useNavigate();
  const isCategoryLoading = useSelector(categoryIsLoadingSelector);

  const handleTitleClick = (event) => {
    navigate(`/shop/${title}`);
  };
  return (
    <Fragment>
      {isCategoryLoading ? (
        <Spinner></Spinner>
      ) : (
        <div className="category-preview-container">
          <h1>
            <span className="title" onClick={handleTitleClick}>
              {title.toUpperCase()}
            </span>
          </h1>
          <div className="preview">
            {products
              .filter((_, idx) => idx < 4)
              .map((product) => (
                <ProductCard key={product.id} product={product}></ProductCard>
              ))}
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default CategoryPreview;
