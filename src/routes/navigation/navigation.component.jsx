import { Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as CrownLogo } from "../../assets/crown.svg";

import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.util";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";
import { NavigationContainer, LogoContainer} from "./navigation.styles";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to={"/"}>
          <CrownLogo></CrownLogo>
        </LogoContainer>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon></CartIcon>
        </div>
        {isCartOpen && <CartDropDown></CartDropDown>}
      </NavigationContainer>

      <Outlet></Outlet>
    </Fragment>
  );
};

export default Navigation;
