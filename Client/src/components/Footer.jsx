import React from "react";
import { FaDiscord, FaFacebook, FaTwitter, FaComment, FaBell } from "react-icons/fa";
import { RiLogoutBoxLine } from "react-icons/ri";
import "./styles/Footer.css";

const Footer = () => {
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
        <RiLogoutBoxLine className="logout-icon" />
      </div>
    </footer>
  );
};

export default Footer;
