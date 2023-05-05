import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="left-header">
        <img
          src="https://static.wixstatic.com/media/284930_33f66871888440399552121a9551ec74.jpg/v1/fill/w_109,h_139,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/284930_33f66871888440399552121a9551ec74.jpg"
          alt="logo"
        />
        <div className="left-header-heading">
          <h1>NUK 9 Information Security Auditors LLP</h1>
          <div className="left-header-sub">
            <h3>Governance | Risk | Compliance | Security | Coaching</h3>
            <h3>Destination for all InfoSec Compliances</h3>
          </div>
        </div>
      </div>
      <div className="right-header">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Services</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
