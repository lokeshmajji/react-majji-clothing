import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import {
  onAuthStateChangedListener,
  createUserDocFromAuth,
} from "./utils/firebase/firebase.util";
import { setCurrentUser } from "./store/user/user.actions";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubScribe = onAuthStateChangedListener((user) => {
      console.log(user);
      if (user) {
        createUserDocFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsubScribe;
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation></Navigation>}>
        <Route index element={<Home></Home>}></Route>
        <Route path="shop/*" element={<Shop></Shop>}></Route>
        <Route path="auth" element={<Authentication></Authentication>}></Route>
        <Route path="checkout" element={<Checkout></Checkout>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
