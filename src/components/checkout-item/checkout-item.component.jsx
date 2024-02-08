import "./checkout-item.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { addCartItem, clearCartItem, removeCartItem } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

const CheckoutItem = ({ item }) => {
  const { name, imageUrl, quantity, price } = item;
  const cartItems = useSelector(selectCartItems)
  const dispatch = useDispatch()

  const handleQtyUp = () => {
    dispatch(addCartItem(cartItems, item))
  };
  const handleQtyDown = () => {
    dispatch(removeCartItem(cartItems, item))
  };
  const handleClearItem = () => {
    dispatch(clearCartItem(cartItems, item));
  };
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name}></img>
      </div>

      <span className="name">{name}</span>
      <div className="quantity">
        <span className="arrow" onClick={handleQtyDown}>
        &#10094;
        </span>
        <span className="value">{quantity}</span>
        <span className="arrow" onClick={handleQtyUp}>
        &#10095;
        </span>
      </div>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={handleClearItem}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
