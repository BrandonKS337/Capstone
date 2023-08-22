import React from "react";
import { FaDiscord, FaFacebook, FaTwitter, FaComment, FaBell } from "react-icons/fa";
import { RiLogoutBoxLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom"; // <-- Import this
import "./styles/Footer.css";

const Footer = () => {
  const navigate = useNavigate(); // Use the hook to get the navigate function

  const handleLogout = () => {
    // TODO: Clear any user data, tokens, etc. from local storage, cookies or state

    // TODO: If necessary, make an API call to invalidate session or token

    // Redirect to login page
    navigate("/");
  };

  return (
    <footer className="footer">
      <div className="left">
        Copyright © 2023 Brandon Builds it LLC | Archives | Policies | FAQ
      </div>
      <div className="right">
        <div className="social-icons">
          <FaDiscord className="icon" />
          <FaFacebook className="icon" />
          <FaTwitter className="icon" />
        </div>
        <div className="separator"></div>
        <div className="notification-icons">
          <FaComment className="icon" />
          <FaBell className="icon" />
        </div>
        <RiLogoutBoxLine className="logout-icon" onClick={handleLogout} /> {/* Attach the onClick event */}
      </div>
    </footer>
  );
};

export default Footer;
