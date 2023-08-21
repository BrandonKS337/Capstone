import React from "react";
import "../styles/Login.css"; // Path to your styles folder

export const Login = () => {
  return (
    <div className="LoginPage">
      <div className="overlap-wrapper">
        <div className="overlap">
          <img
            className="appName"
            alt="Fantasy nexus a"
            src="./src/components/assets/fantasyNexusTitle.svg"
          />
          <div className="user-password-inputs">
            <div className="div">
              <div className="userORemail">Username / email</div>
              <div className="userPWrd">Password</div>
            </div>
          </div>
          <div className="login-button">
            <div className="overlap-group">
              <div className="text-wrapper">LOGIN</div>
            </div>
          </div>
          
          <img
            className="altLoginBreaker"
            alt="Or divider"
            src="./src/components/assets/altloginbuttons/Or Divider.svg"
          />
          <div className="forgotPWrd">Forgot password?</div>
          <p className="noAccount">
            <span className="span">Don’t have an Account?&nbsp;&nbsp;</span>
            <span className="hyperlink">Create new</span>
          </p>
          <div className="copright-footer">
            Copyright © 2023 Brandon Builds it LLC | Archives | Policies | FAQ
          </div>
          <img
            className="google-login"
            alt="Google login"
            src="./src/components/assets/altloginbuttons/Google Login.svg"
          />
          <img
            className="facebook-login"
            alt="Facebook login"
            src="./src/components/assets/altloginbuttons/Facebook Login.svg"
          />
          <img
            className="apple-login"
            alt="Apple login"
            src="./src/components/assets/altloginbuttons/Apple Login.svg"
          />
          <div className="remember-me-button">
            <div className="rectangle" />
            <div className="text-wrapper-6">Remember Me</div>
          </div>
        </div>
      </div>
    </div>
  );
};
