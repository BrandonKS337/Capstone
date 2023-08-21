import React, { useState } from "react";
import axios from "axios";
import "../styles/Login.css"; // Path to your styles folder

export const Login = () => {
  //set up use state effects for taking userName/password/remember so that the data can be transferred

  const [username, setUsername] = useState(""); //holds the username/email input value
  const [password, setPassword] = useState(""); //holds the password input
  const [rememberMe, setRememberMe] = useState(false); //holds the remember me state//not used just yet
  const [errorMessage, setErrorMessage] = useState(""); //just setting this to help with displaying any error messages

  const handleLogin = async () => {
    try {
      //tries to make POST request to backend with username/password and rememberMe status.
      const response = await axios.post(
        "http://localhost:8000/api/auth/username",
        {
          username: username,
          password: password,
        }
      );

      if (response.data.success) {
        console.log("Successfully logged in: ", response.data.data);
        //will need to insert code here for what happens when response is good.... like route to dashboard ('/api/dashboard')
      } else {
        setErrorMessage(response.data.data);
      }
    } catch (error) {
      console.error("Login error: ", error);
      setErrorMessage("Login failed. Please try again.");
    }
  };

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
              <input
                className="username"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {/*Look into incorporating both username OR Email here as a stretch goal. */}
              <input
                className="userPWrd"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {/*This is the button that submits info to backend */}
          <button className="login-button" onClick={handleLogin}>
            {/* <button className="overlap-group" onClick={handleLogin}> */}
            <div className="text-wrapper">LOGIN</div>
            {/* </button> */}
          </button>
          <div className="remember-me-button">
            <input
              className="checkbox"
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe((prevState) => !prevState)}
            />
            <div className="text-wrapper-6">Remember Me</div>
          </div>
          {errorMessage && <div className="error-message">{errorMessage}</div>}

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
        </div>
      </div>
    </div>
  );
};
