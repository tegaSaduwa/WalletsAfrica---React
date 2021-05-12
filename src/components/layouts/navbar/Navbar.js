import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header class="d-flex pt-2">
      <h6 class="brand mr-4 pr-5">
        Hello, Enterprise Wallets Payment Salary Account
      </h6>
      <ul class="nav justify-content-end">
        <li class="navlink d-flex ml-5 pl-5">
          <a href="#">
            <img
              src="/assets/images/user-image.svg"
              alt="logo"
              class="header__img "
            />
          </a>
          <img
            src="/assets/images/arrow-down-sign-to-navigate.svg"
            class="arrow_down  px-2"
            alt="nav-up"
          />
          {/* <div class="line_demarcation mt-1 mr-2"></div> */}

          <span class="logout pt-2 pl-2 pr-1">Logout</span>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
