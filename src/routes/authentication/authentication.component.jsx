
import SignUpForm from "../sign-up-form/signup.form.component";
import "./authentication.styles.scss";
import SignInForm from "../sign-in-form/sign-in-form.component";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm></SignInForm>
      <SignUpForm></SignUpForm>
    </div>
  );
};

export default Authentication;
