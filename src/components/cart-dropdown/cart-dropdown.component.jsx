import { useNavigate } from "react-router-dom";
import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdown.styles.jsx";
import { CartDropDownContainer, CartEmptyMessage, CartItems, CheckoutButton } from "./cart-dropdown.styles.jsx";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";
const CartDropDown = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  
  const navigate = useNavigate();
  const goToCheckout = () => {
    dispatch(setIsCartOpen())
    navigate("/checkout");
  };

  return (
    <CartDropDownContainer>
      {cartItems.length ? (
        <CartItems>
          {cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem}></CartItem>
          ))}
        </CartItems>
      ) : (
        <CartEmptyMessage className="empty-message">Cart Empty!</CartEmptyMessage>
      )}
      <CheckoutButton onClick={goToCheckout}>GOTO CHECKOUT</CheckoutButton>
    </CartDropDownContainer>
  );
};

export default CartDropDown;
