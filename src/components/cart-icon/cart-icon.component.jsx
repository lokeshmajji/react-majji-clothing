import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./cart-icon.styles.scss";
import { ReactComponent as CartIconSvg } from "../../assets/shopping-bag.svg";
const CartIcon = (props) => {
  const { cartQuantity, toggleCart } = useContext(CartContext);

  const handleCartOpen = () => {
    console.log("toggle")
    toggleCart();
  };
  return (
    <div onClick={handleCartOpen} {...props} className="cart-icon-container">
      <CartIconSvg className="cart-icon"></CartIconSvg>
      <span className="item-count">{cartQuantity}</span>
    </div>
  );
};

export default CartIcon;
