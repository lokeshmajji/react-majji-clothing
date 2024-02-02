import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { ReactComponent as CartIconSvg } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.js";
import { CartIconContainer, CartItemCount } from "./cart-icon.styles.js";

const CartIcon = (props) => {
  const { cartQuantity, toggleCart } = useContext(CartContext);

  const handleCartOpen = () => {
    console.log("toggle")
    toggleCart();
  };
  return (
    <CartIconContainer onClick={handleCartOpen} {...props}>
      <CartIconSvg></CartIconSvg>
      <CartItemCount>{cartQuantity}</CartItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
