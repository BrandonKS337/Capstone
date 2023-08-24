import React from "react";
import "../styles/SignupPage.css"; // import your CSS file

export const SignupPage = ({ overlapClassName, appleSvgClassName, divClassName }) => {
    return (
      <div className="create-account">
        <div className="text-wrapper">Create Account</div>
      <div className="user-name-input">
        <div className="overlap-group">
          <div className="div">User Name</div>
          <img
            className="healthicons-ui-user"
            alt="Healthicons ui user"
            src="healthicons-ui-user-profile-outline.svg"
          />
        </div>
      </div>
      <img className="user-email-input" alt="User email input" src="user-email-input.png" />
      <img className="user-password-input" alt="User password input" src="user-password-input.png" />
      <button className="login-button">
        <div className="overlap">
          <div className="text-wrapper-2">Submit</div>
        </div>
      </button>
      <div className="google-login">
        <div className="overlap-2">
          <img className="img" alt="Google svg" src="google-svg.svg" />
          <div className="text-wrapper-3">Sign in with Google</div>
        </div>
      </div>
      <div className="facebook-login">
        <div className="overlap-3">
          <div className="text-wrapper-4">Log in with Google</div>
          <img className="img" alt="Facebook svg" src="facebook-svg.svg" />
        </div>
      </div>
      <div className="apple-login">
        <div className={`overlap-4 ${overlapClassName}`}>
          <img className={`apple-svg ${appleSvgClassName}`} alt="Apple svg" src="apple-svg.svg" />
          <div className={`text-wrapper-5 ${divClassName}`}>Continue with Apple</div>
        </div>
      </div>
      <img className="or-divider" alt="Or divider" src="or-divider.svg" />
      </div>
    );
  };

  export default SignupPage