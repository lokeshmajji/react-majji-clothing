import styled from "styled-components";
import Button from "../button/button.component";

export const CartDropDownContainer = styled.div`
  position: absolute;
  width: 340px;
  height: 440px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`;

export const CartEmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItems = styled.div`
  height: 340px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const CheckoutButton = styled(Button)`
    margin-top: auto;
` 
// .cart-dropdown-container {
//   // position: absolute;
//   // width: 340px;
//   // height: 440px;
//   // display: flex;
//   // flex-direction: column;
//   // padding: 20px;
//   // border: 1px solid black;
//   // background-color: white;
//   // top: 90px;
//   // right: 40px;
//   // z-index: 5;

//   .empty-message {
//     // font-size: 18px;
//     // margin: 50px auto;
//   }

//   .cart-items {
//     // height: 340px;
//     // display: flex;
//     // flex-direction: column;
//     // overflow: scroll;
//   }

//   button {
//     margin-top: auto;
//   }

// }
