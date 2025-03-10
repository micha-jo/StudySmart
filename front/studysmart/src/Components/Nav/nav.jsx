import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";

export default function Nav() {
  return (
    <div className="nav">
      <div className="nav_box_profil">
        <NavLink className="nav_button_profil">profil</NavLink>
      </div>
      <div className="nav_box_title">
        <h1 className="nav_button_title">StudySmart</h1>
      </div>
      <div className="nav_box_button_auth">
        <NavLink to={"/"} className="nav_button_login">
          login
        </NavLink>
        <NavLink to={"/signup"} className="nav_button_signup">
          sign up
        </NavLink>
      </div>
    </div>
  );
}
