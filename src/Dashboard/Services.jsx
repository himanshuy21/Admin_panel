import React from "react";
import { Link } from "react-router-dom";
import banner1 from "../servicesPhoto/banner-1.JPG";
import Dashboard from "./Dashboard";
import Footer from "./Footer";
import HeadersPage from "./Header";
function Services() {
  return (
    <>
      <HeadersPage />
      <div className="container-fluid">
        <div className="row">
          <Dashboard />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className=" mt-4 mb-4">
              <div className="h2">Services</div>
              {/* <!-- Button trigger modal --> */}
              <div className="btn-toolbar mb-2 mb-md-0">
                <div className="btn-group me-2">
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal1"
                  >
                    Add Services
                  </button>
                </div>
              </div>
              {/* <!-- Modal --> */}
              <div
                className="modal fade"
                id="exampleModal1"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Add Details
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div className="mb-3">
                        <input
                          type="url"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Image Url"
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Title"
                        />
                      </div>
                      <div className="mb-3">
                        <textarea
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          rows="3"
                          placeholder="description"
                        ></textarea>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="submit" className="btn btn-primary">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom ">
              <div className="card m-3 d-flex justify-content-center">
                <img src={banner1} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Web Design</h5>

                  {/* <!-- Button trigger modal --> */}
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    <Link to="/description" className="text-white">
                      Description
                    </Link>
                  </button>
                </div>
              </div>
              <div className="card m-3 d-flex justify-content-center">
                <img src={banner1} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Web Design</h5>

                  {/* <!-- Button trigger modal --> */}
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    <Link to="/description" className="text-white">
                      Description
                    </Link>
                  </button>
                </div>
              </div>
              <div className="card m-3 d-flex justify-content-center">
                <img src={banner1} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Web Design</h5>

                  {/* <!-- Button trigger modal --> */}
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    <Link to="/description" className="text-white">
                      Description
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Services;
