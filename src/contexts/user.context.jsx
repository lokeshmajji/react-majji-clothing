import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener, createUserDocFromAuth } from "../utils/firebase/firebase.util";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubScribe = onAuthStateChangedListener((user) => {
      console.log(user);
      if (user) {
        createUserDocFromAuth(user);
      } 
        setCurrentUser(null);
      
    });
    return unsubScribe;
  }, []);

  const value = { currentUser, setCurrentUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
