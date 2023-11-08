import React from "react";
import "./login.css";
export default function login() {
  return (
    <div id="login">
      <div className="login_left"></div>
      <div className="login_right">
        <div className="login_right_box">
          <h2 className="login_right_title">Your Account</h2>

          <form className="login_form" action="">
            <div className="input_contener">
              <p>EMAIL</p>
              <input className="login_input" type="text" />
            </div>
            <div className="input_contener">
              <p>PASSWORD</p>
              <input className="login_input" type="text" />
            </div>
            <div>
              <button>LOG IN</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
