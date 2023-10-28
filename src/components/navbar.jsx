import "./navbar.css";
import React from "react";
import { Link } from "react-router-dom";
import DataContext from "../../store/dataContext";
import { useContext } from "react";



function Navbar(){

  const user =useContext(DataContext).user;
  const cart =useContext(DataContext).cart;
    return (
        <div className="navbar">
      <nav className="navbar navbar-expand-lg bg-body-tertiary"></nav>
  <div className="container-fluid"></div>
    <Link className="navbar-brand" to="/">
      Navbar
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home<FontAwesomeIcon icon="fa-solid fa-house" />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/catalog">
                Catalog<FontAwesomeIcon icon="fa-solid fa-store" />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us<FontAwesomeIcon icon="fa-solid fa-address-card" />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                Cart
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown<FontAwesomeIcon icon="fa-solid fa-circle-chevron-down" />
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <Link to="/cart" className="btn btn-outline-light">
              Cart<FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
            </Link>
          </form>
        </div>
      </div>
    );
}
export default Navbar;