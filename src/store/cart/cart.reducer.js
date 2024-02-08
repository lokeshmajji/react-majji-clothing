import { CART_ACTION_TYPES } from "./cart.type";

const CART_INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartTotal: 0,
  cartQuantity: 0,
};

export const cartReducer = (state = CART_INITIAL_STATE, action) => {
    console.log( "receive action:", action)
  const { type, payload } = action;
  switch (type) {
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return { ...state, isCartOpen: payload };
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      const cartTotal = payload.reduce(
        (acc, item) => acc + item.quanity * item.price,
        {}
      );
      const cartQuantity = payload.reduce(
        (acc, item) => acc + item.quantity,
        0
      );

      return { ...state, cartItems: payload, cartTotal, cartQuantity };
    default:
      return state;
  }
};
