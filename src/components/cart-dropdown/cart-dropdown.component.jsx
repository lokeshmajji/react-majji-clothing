import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";

import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component";
const CartDropDown = () => {
  const { cartItems, toggleCart } = useContext(CartContext);

  const navigate = useNavigate();
  const goToCheckout = () => {
    toggleCart();
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      {cartItems.length ? (
        <div className="cart-items">
          {cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem}></CartItem>
          ))}
        </div>
      ) : (
        <span className="empty-message">Cart Empty!</span>
      )}
      <Button onClick={goToCheckout}>GOTO CHECKOUT</Button>
    </div>
  );
};

export default CartDropDown;
