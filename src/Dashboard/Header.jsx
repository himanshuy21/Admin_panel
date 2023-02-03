import React from "react";
import porfile from "./Overview_images/Profile.jpg";
import { Link } from "react-router-dom";
import logo from "./Overview_images/logo-light2.JPG";
function HeadersPage() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark sticky-top bg-dark ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} className="logo "></img>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex ms-auto">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
            <ul className="navbar-nav  mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src={porfile}
                    alt="not working sorry "
                    className="profile  "
                  />
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      <p className="text-light mt-2 p-2">
                        <Link to="/userdetail" className="text-dark">
                          Himanshu Yadav
                        </Link>
                      </p>
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item text-center" href="#">
                      <Link to="/" className="text-dark">
                        Log Out
                      </Link>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default HeadersPage;
