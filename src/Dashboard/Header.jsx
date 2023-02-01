import React from "react";
import porfile from "./Overview_images/Profile.jpg";
import { Link } from "react-router-dom";
import logo from "./Overview_images/logo-light2.JPG";
function HeadersPage() {
  return (
    <>
      <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">
          <img src={logo} className="logo"></img>
        </a>
        <button
          className="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-nav">
          <div className="d-flex justify-content-center mt-2">
            <p className="text-light mt-2 p-2">
              <Link to="/userdetail" className="text-light">
                Himanshu Yadav
              </Link>
            </p>
            <img
              src={porfile}
              alt="not working sorry "
              className="profile"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            />
          </div>
        </div>
      </header>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                User Detail
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>Username : Himanshu Yadav </p>
              <p>Mail-id : himanshuyadav2102@gmail.com</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeadersPage;
