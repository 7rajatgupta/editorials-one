import React from "react";
import { Link } from "react-router-dom";
import logo from "../static/img/logo.png";

const Nav = () => {
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/">
            <img className="logo-nav" src={logo} alt="Home" />
          </Link>
        </div>
        <ul className="navbar nav-links navbar-right">
          <Link to="/">
            <li className="nav-item">Home</li>
          </Link>
          <Link to="/about">
            <li className="nav-item">About</li>
          </Link>
          <Link to="/contact">
            <li className="nav-item">Contact</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
