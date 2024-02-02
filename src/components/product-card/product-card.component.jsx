import { useContext } from "react";
import Button from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";
import { BUTTON_CLASS_TYPES } from "../button/button.component";

import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const { imageUrl, name, price } = product;
  const { addCartItem } = useContext(CartContext);
  const handleAddToCart = () => {
    addCartItem(product);
  };
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name}></img>
      <Button buttonType={BUTTON_CLASS_TYPES.inverted} onClick={handleAddToCart}>
        Add to cart
      </Button>
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
