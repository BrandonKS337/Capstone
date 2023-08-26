import React, { useState } from "react";
import "../styles/SignupPage.css"; // import your CSS file

export const SignupPage = ({ onClose }) => {
  //define "state" variables using useState hook => for the inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [statusMessage, setStatusMessage] = useState("Submit");
  const [errorMessage, setErrorMessage] = useState("");

  //Sudo: create "event handler" for submitting the data to http://localhost:8000/api/auth/signup
  const handleSignup = async (e) => {
    e.preventDefault(); //this part prevents default form submission behavior aka prevents it from refreshing page.... just leaving this for now so I can test that my Post method is working. need to remove so it will close overlay on success

    const userData = {
      firstName,
      lastName,
      username,
      email,
      password,
    };

    try {
      const response = await fetch("http://localhost:8000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      if (response.ok) {
        setStatusMessage("Success");
        setTimeout(() => {
          onClose();
        }, 1000);
      } else {
        setErrorMessage(data.message);
        console.error("Signup error:", data.message);
      }
    } catch (error) {
      setErrorMessage(
        "There was a teeny TINY mixup during your signup process. Please enter in different information and try again as the Username/Email may be already in use!"
      );
      console.error(
        "There was a teeny TINY mixup during your signup process: ",
        error
      );
    }
  };

  return (
    <div className="overlay">
      <div className="create-account">
        <button className="cancel-button" onClick={onClose}>
          X
        </button>
        <div className="Title">Create Account</div>
        <div className="user-input">
          <div className="input-box">
            <input
              className="input"
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              maxLength="15"
            />
          </div>
          <div className="input-box">
            <input
              className="input"
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              maxLength="15"
            />
          </div>
          <div className="input-box">
            <input
              className="input"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              maxLength="15"
            />
          </div>
          <div className="input-box">
            <input
              className="input"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              maxLength="25"
            />
          </div>
          <div className="input-box">
            <input
              className="input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              maxLength="15"
            />
          </div>
        </div>

        <button type="submit" className="login-button" onClick={handleSignup}>
          <div className="submit-button">
            <div className="text-wrapper-2">{statusMessage}</div>
          </div>
        </button>
        {errorMessage && <div className="error-message">{errorMessage}</div>}

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
              <div className="text-wrapper-5">Continue with Apple</div>
              <img
                className="img"
                alt="Apple Logo"
                src="./src/components/assets/altloginbuttons/Apple.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
