import React from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav className="nav-sidebar">
        <div className="nav-brand">
          <i className="fas fa-laugh-wink"> </i> <h2> SB ADMIN </h2>
        </div>
        <ul className="links">
          <li>
            <NavLink className="nav-link" to="/dashboard">
              <i className="fas fa-fw fa-cog"> </i> <span> Dashboard </span>
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/users">
              <i className="fas fa-fw fa-table"> </i> <span> All Users </span>
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/create-user">
              <i className="fas fa-fw fa-cog"> </i> <span> Create User </span>
            </NavLink>
          </li>
          <li>
            <a className="nav-link" href="/">
              <i className="fas fa-fw fa-wrench"> </i> <span> Edit User </span>
            </a>
          </li>
          <li>
            <a className="nav-link" href="/">
              <i className="fas fa-fw fa-chart-area"> </i> <span> Charts </span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
