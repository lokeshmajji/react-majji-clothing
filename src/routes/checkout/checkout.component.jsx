import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span className="header-block">Product</span>
        </div>
        <div className="header-block">
          <span className="header-block">Description</span>
        </div>
        <div className="header-block">
          <span className="header-block">Quantity</span>
        </div>
        <div className="header-block">
          <span className="header-block">Price</span>
        </div>
        <div className="header-block">
          <span className="header-block">Remove</span>
        </div>
      </div>

      {cartItems.map((item) => (
        <CheckoutItem key={item.id} item={item}></CheckoutItem>
      ))}

      <div className="total">
        <span>TOTAL: ${cartTotal}</span>
      </div>
    </div>
  );
};

export default Checkout;
