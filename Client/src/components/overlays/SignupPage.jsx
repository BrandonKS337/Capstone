import React from "react";
import "../styles/SignupPage.css"; // import your CSS file

export const SignupPage = ({divClassName}) => {
  return (
    <div className="create-account">
      <div className="Title">Create Account</div>
      <div className="user-input">
        <div className="input-box">
          <input className="input" type="text" placeholder="First Name" />
        </div>
        <div className="input-box">
          <input className="input" type="text" placeholder="Last Name" />
        </div>
        <div className="input-box">
          <input className="input" type="text" placeholder="Username" />
        </div>
        <div className="input-box">
          <input className="input" type="email" placeholder="Email" />
        </div>
        <div className="input-box">
          <input className="input" type="password" placeholder="Password" />
        </div>
      </div>

      <button className="login-button">
        <div className="submit-button">
          <div className="text-wrapper-2">Submit</div>
        </div>
      </button>
      <img
        className="or-divider"
        alt="Or divider"
        src="./src/components/assets/altloginbuttons/RedOrDivider.svg"
      />
      <div className="alt-buttons">
        <div className="google-login">
          <div className="google-button">
            <img
              className="img"
              alt="Google svg"
              src="./src/components/assets/altloginbuttons/Google.svg"
            />
            <div className="text-wrapper-3">Sign in with Google</div>
          </div>
        </div>
        <div className="facebook-login">
          <div className="facebook-button">
            <div className="text-wrapper-4">Log in with Facebook</div>
            <img
              className="img"
              alt="Facebook svg"
              src="./src/components/assets/altloginbuttons/Facebook.svg"
            />
          </div>
        </div>
        <div className="apple-login">
          <div className="apple-button">
            <div className={`text-wrapper-5 ${divClassName}`}>
              Continue with Apple
            </div>
            <img
              className="img"
              alt="Apple Logo"
              src="./src/components/assets/altloginbuttons/Apple.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
