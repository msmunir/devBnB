import React from "react";

import { Link, NavLink } from "react-router-dom";
import { useUser } from "../../context/UseContext";
import { FaUserCircle } from "react-icons/fa";
import { FaHamburger } from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
  const user = useUser();

  const handleLogout = () => {
    localStorage.removeItem("TOKEN");
    user.setToken(null);

    // Redirect to login
    // window.location.href = "/";
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid mx-5">
        <Link className="navbar-brand" to="/">
          DevBnB
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          {/* leftside */}
          <ul className="navbar-nav me-auto text-uppercase font-weight-normal">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/details/:id">
                Details
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/support">
                Support
              </NavLink>
            </li>
          </ul>

          {/* Right side */}
          <ul className="navbar-nav ">
            {user.token ? (
              <li className="nav-item">
                <NavLink
                  onClick={handleLogout}
                  className="nav-link"
                  to="/"
                  style={{ color: "#fff" }}
                >
                  Logout
                </NavLink>
              </li>
            ) : (
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="navRight">
                    <FaHamburger className="icon" />
                    <FaUserCircle className="icon" />
                  </span>
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item" to="/login">
                      Login
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/register">
                      Register
                    </NavLink>
                  </li>
                </ul>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
