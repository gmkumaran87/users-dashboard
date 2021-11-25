import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="nav-top">
      <form className="dashboard-form" action="">
        <div className="form-control">
          <input
            className="user-input"
            type="text"
            htmlFor="nameSearch"
            placeholder="Search for..."
          />
          <button className="btn search-btn">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </form>
      <ul className="header-links">
        <li>
          <a href="/">
            <i className="fas fa-bell"></i>
          </a>
        </li>
        <li>
          <a href="/">
            <i className="fas fa-envelope"></i>
          </a>
        </li>
        <div className="link-divider"></div>
        <li>
          <a href="/" className="user-profile">
            <span className="user-name">Muthukumaran</span>
            <div className="user-pic"></div>
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
