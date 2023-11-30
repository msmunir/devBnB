import React from "react";
// import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
import { useUser } from "../../context/UseContext";

const Navbar = () => {
  const user = useUser();

  const handleLogout = () => {
    localStorage.removeItem("TOKEN");
    user.setToken(null);

    // Redirect to login
    window.location.href = "/login";
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid mx-4">
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
          {/* <ul className="navbar-nav ms-auto"> */}
          <ul className="navbar-nav me-auto mb-2 ms-4 mb-lg-0 ">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            {/* {user && (
              <> */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/products">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/add">
                Add
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/orders">
                Orders
              </NavLink>
            </li>
          </ul>
          <span className="navbar-text">
            <ul className="navbar-nav mb-2 ms-4 mb-lg-0 ">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/login"
                  onClick={handleLogout}
                >
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/login"
                  onClick={handleLogout}
                >
                  Logout
                </NavLink>
              </li>
            </ul>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
