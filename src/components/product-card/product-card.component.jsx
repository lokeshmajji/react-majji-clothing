import Button from "../button/button.component";
import { BUTTON_CLASS_TYPES } from "../button/button.component";
import { addCartItem} from '../../store/cart/cart.action'
import {useDispatch, useSelector} from 'react-redux'

import "./product-card.styles.scss";
import { selectCartItems } from "../../store/cart/cart.selector";

const ProductCard = ({ product }) => {
  const { imageUrl, name, price } = product;
  const dispatch = useDispatch()  

  const cartItems = useSelector(selectCartItems)
  const handleAddToCart = () => {
    console.log(cartItems)
    dispatch(addCartItem(cartItems, product));
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
