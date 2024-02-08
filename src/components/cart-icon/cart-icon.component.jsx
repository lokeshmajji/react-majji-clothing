import { ReactComponent as CartIconSvg } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.js";
import { CartIconContainer, CartItemCount } from "./cart-icon.styles.js";
import { useSelector } from "react-redux";
import { selectCartCount, selectIsCartOpen } from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";
import { useDispatch } from "react-redux";

const CartIcon = (props) => {
  const dispatch = useDispatch()
  const cartCount = useSelector(selectCartCount)
  const isCartOpen = useSelector(selectIsCartOpen)

  const handleCartOpen = () => {
    console.log("toggle")
    dispatch(setIsCartOpen(!isCartOpen))
  };
  return (
    <CartIconContainer onClick={handleCartOpen} {...props}>
      <CartIconSvg></CartIconSvg>
      <CartItemCount>{cartCount}</CartItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
