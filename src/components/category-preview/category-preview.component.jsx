import { useNavigate } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";
import "./category-preview.styles.scss";

const CategoryPreview = ({ title, products }) => {
  const navigate = useNavigate();
  const handleTitleClick = (event) => {
    navigate(`/shop/${title}`);
  };
  return (
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
  );
};

export default CategoryPreview;
