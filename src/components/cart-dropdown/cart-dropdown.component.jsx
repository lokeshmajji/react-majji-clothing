import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdown.styles.jsx";
import { CartDropDownContainer, CartEmptyMessage, CartItems, CheckoutButton } from "./cart-dropdown.styles.jsx";
const CartDropDown = () => {
  const { cartItems, toggleCart } = useContext(CartContext);

  const navigate = useNavigate();
  const goToCheckout = () => {
    toggleCart();
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
