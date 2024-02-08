import { createAction } from "../../utils/redux/redux.util";
import { CART_ACTION_TYPES } from "./cart.type";

export const setIsCartOpen = (isCartOpen) => {
  return createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, isCartOpen);
};

export const setCartItems = (cartItems) => {
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems);
};

const addItemToCart = (cartItems, itemToAdd) => {
  const existingCartItem = cartItems.find((item) => item.id === itemToAdd.id);
  if (existingCartItem) {
    return cartItems.map((item) =>
      item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

const clearItemFromCart = (cartItems, itemToClear) => {
  return cartItems.filter((item) => item.id !== itemToClear.id);
};

const removeItemFromCart = (cartItems, itemToRemove) => {
  const existingCartItem = cartItems.find(
    (item) => item.id === itemToRemove.id
  );
  if (existingCartItem.quantity === 1) {
    return clearItemFromCart(cartItems, itemToRemove);
  }
  const updatedItems = cartItems.map((item) =>
    item.id === itemToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
  return updatedItems;
};

export const addCartItem = (cartItems, item) => {
  return setCartItems(addItemToCart(cartItems, item));
};

export const removeCartItem = (cartItems, item) => {
  return setCartItems(removeItemFromCart(cartItems, item));
};

export const clearCartItem = (cartItems, item) => {
  return setCartItems(clearItemFromCart(cartItems, item));
};
