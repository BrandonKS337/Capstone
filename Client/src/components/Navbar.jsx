import React, { useState } from "react";

import "./styles/Navbar.css";
import { Link, NavLink } from "react-router-dom";
import Logo from "./assets/DarkLogo_noshadow.svg";
// import {Footer} from "./Footer"

export const Navbar = () => {

  return (
    <>
      <nav>
        <Link to="/Home" className="title">
          <img src={Logo} alt="logo" />
          <p className="hint">(click to go home)</p>{" "}
          {/*get this dang thing to be as you want it...draw in Figma and save as svg if you have to.*/}
        </Link>
        <ul>
          {/*<li>
          <NavLink to="/"> Login</NavLink> }
        </li>*/}
          <li>
            <NavLink to="/Characters">Characters</NavLink>
          </li>
          <li>
            <NavLink to="/Library">Library</NavLink>
          </li>
          <li>
            <NavLink to="/BattlePit">The Battle Pitt</NavLink>
          </li>
          <li>
            <NavLink to="/AdventurersDen">Adventurers' Den</NavLink>
          </li>
          <li>
            <NavLink to= "/Profile"> Profile </NavLink>
          </li>
          
        </ul>
        {/* <Footer/> */}
      </nav>
    </>
  );
};
