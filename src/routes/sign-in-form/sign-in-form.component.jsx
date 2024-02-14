import Button, { BUTTON_CLASS_TYPES } from "../../components/button/button.component";
import FormInput from "../../components/form-input/form-input.component";
import {
  signInWithGooglePopUp,
  createUserDocFromAuth,
  signInAuthWithEmailAndPassword,
} from "../../utils/firebase/firebase.util";
import { useState } from "react";
import { useDispatch } from "react-redux";

import "./sign-in-form.styles.scss";
import { emailSignInStart, googleSignInStart } from "../../store/user/user.actions";

const defaultSignInProps = {
  email: "",
  password: "",
};

const SignInForm = () => {

  const dispatch = useDispatch()
  const [signInFormState, setSignInFormState] = useState(defaultSignInProps);
  const { email, password } = signInFormState;


  const resetFormFields = () => {
    setSignInFormState(defaultSignInProps);
  };
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setSignInFormState({ ...signInFormState, [name]: value });
  };
  const signInWithEmailAndPassword = async (event) => {
    event.preventDefault();
    const { email, password } = signInFormState;
    try {
      // await signInAuthWithEmailAndPassword(email, password);
      dispatch(emailSignInStart(email, password))
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/invalid-credential") {
        alert("Invalid Credentials");
      } else {
        console.log(error);
      }
    }
  };
  const signInWithGoogle = async () => {
    // try {
    //   await signInWithGooglePopUp();
    // } catch(error ){
    //   if(error.code === 'auth/user-cancelled') {
    //     alert('user cancelled google sign-on')
    //   }
    // }
    dispatch(googleSignInStart())
  };
  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={signInWithEmailAndPassword}>
        <FormInput
          onChange={handleOnChange}
          label="Email"
          type="email"
          value={email}
          name="email"
          required
        />
        <FormInput
          onChange={handleOnChange}
          label="Password"
          type="password"
          value={password}
          name="password"
          required
        />

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button buttonType={BUTTON_CLASS_TYPES.google} onClick={signInWithGoogle}>
            Google SignIn
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
