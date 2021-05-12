import React from "react";
import {Link} from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div class="sidenav">
      <img
        src={`/assets/images/logomark wallet.svg`}
        alt="logo"
        class="sidenav__img"
      />
      
      <Link to="/" class="first-child">
        Dashboard
      </Link>
      <Link to="#">Users</Link>
      <Link to="#">
        Send Money
      </Link>
      <Link to="#">Request Money</Link>
      <Link to="#">Buy Airtime</Link>
      <Link to="#">Pay Bills</Link>
      <Link to="/cards">Cards</Link>
      <Link to="#">
        Reports
      </Link>
      <Link to="#">Settings</Link>
      <Link to="#">API Documentation</Link>
    </div>
  );
};

export default Sidebar;
