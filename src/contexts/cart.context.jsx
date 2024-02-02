import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  toggleCart: () => null,
  cartItems: [],
  setCartItems: () => null,
  addCartItem: () => null,
  cartQuantityUpdate: () => null,
  removeCartItem: () => null,
  cartTotal: null,
  cartQuantity: null,
});

const addItemToCart = (cartItems, itemToAdd) => {
  const existingCartItem = cartItems.find((item) => item.id === itemToAdd.id);
  if (existingCartItem) {
    return cartItems.map((item) =>
      item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const QTY_MODIFY_ACTION = {
  INCREASE: "INCREASE",
  DECREASE: "DECREASE",
};
const cartItemQuantityUpdate = (items, itemToUpdate, action) => {
  const updatedItems = items.map((item) => {
    if (item.id === itemToUpdate.id) {
      if (action === QTY_MODIFY_ACTION.INCREASE) {
        return { ...item, quantity: item.quantity + 1 };
      } else {
        return { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 };
      }
    } else {
      return item;
    }
  });
  return updatedItems
};

const cartItemRemove = (items, itemToRemove) => {
  return items.filter(item => item.id !== itemToRemove.id)
}


export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const toggleCart = () => {
    console.log(isCartOpen)
    setIsCartOpen(!isCartOpen)
  }
  const addCartItem = (item) => {
    setCartItems(addItemToCart(cartItems, item));
  };

  useEffect(() => {
    const currentQuantity = cartItems.reduce((total, item) => {
      return total + item.quantity;
    }, 0);
    const total = cartItems.reduce( (total, item) => {
      return total + item.quantity * item.price
    }, 0)
    setCartQuantity(currentQuantity);
    setCartTotal(total)
  }, [cartItems]);

  

  const cartQuantityUpdate = (item, action) => {
    setCartItems(cartItemQuantityUpdate(cartItems, item, action));
  };

  const removeCartItem = (item) => {
    setCartItems(cartItemRemove(cartItems, item));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    toggleCart,
    cartItems,
    setCartItems,
    addCartItem,
    cartQuantity,
    cartQuantityUpdate,
    removeCartItem,
    cartTotal
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
