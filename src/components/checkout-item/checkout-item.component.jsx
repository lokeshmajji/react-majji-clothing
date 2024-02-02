import "./checkout-item.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({ item }) => {
  const { name, imageUrl, quantity, price } = item;
  const { cartQuantityUpdate, removeCartItem } = useContext(CartContext);

  const handleQtyUp = () => {
    console.log("UP");
    cartQuantityUpdate(item, "INCREASE");
  };
  const handleQtyDown = () => {
    cartQuantityUpdate(item, "DECREASE");
  };
  const handleRemoveItem = () => {
    removeCartItem(item);
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
      <div className="remove-button" onClick={handleRemoveItem}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
