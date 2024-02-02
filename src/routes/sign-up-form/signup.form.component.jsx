import { useState } from "react";
import {
  createUserAuthWithEmailAndPassword,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.util";
import FormInput from "../../components/form-input/form-input.component";
import Button, { BUTTON_CLASS_TYPES } from "../../components/button/button.component";

import "./signup.form.styles.scss";

const initialFormState = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUpForm = () => {
  const [formState, setFormState] = useState(initialFormState);
  const { displayName, email, password, confirmPassword } = formState;

  const resetFields = () => {
    setFormState(initialFormState);
  };
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = formState;
    if (password !== confirmPassword) return;

    try {
      const { user } = await createUserAuthWithEmailAndPassword(
        email,
        password
      );
      await createUserDocFromAuth(user, { displayName });
      resetFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already in use");
      } else {
        console.log(error);
      }
    }
  };
  return (
    <div className="signup-form-container">
      <h2>Don't have an account?</h2>
      <span>Signup with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          name="displayName"
          value={displayName}
          onChange={handleOnChange}
        />
        <FormInput
          label="Email"
          type="email"
          required
          name="email"
          value={email}
          onChange={handleOnChange}
        />

        <FormInput
          label="Password"
          type="password"
          required
          name="password"
          value={password}
          onChange={handleOnChange}
        />

        <FormInput
          label="Confrim Password"
          type="password"
          required
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleOnChange}
        />

        <Button buttonType={BUTTON_CLASS_TYPES.inverted} type="submit">
          Sign Up
        </Button>
      </form>
    </div>
  );
};
export default SignUpForm;
