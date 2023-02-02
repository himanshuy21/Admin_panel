import React from "react";
import banner1 from "../servicesPhoto/banner-1.JPG";
import Dashboard from "./Dashboard";
import HeadersPage from "./Header";
function Services() {
  return (
    <>
      <HeadersPage />
      <Dashboard />
      <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div className=" mt-4 mb-4">
          <h3>Services</h3>
          {/* <!-- Button trigger modal --> */}
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal1"
          >
            Add Services
          </button>

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
        <div className="d-flex justify-content-between">
          <div className="card mb-3 " style={{ width: "30rem" }}>
            <img src={banner1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Web Design</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Laborum optio, sit incidunt aut explicabo similique mollitia?
                Voluptatem, doloribus? Accusantium, similique veniam consequatur
                sed sint ad dolor illum sapiente vel temporibus!
              </p>
              {/* <!-- Button trigger modal --> */}
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                Description
              </button>

              {/* <!-- Modal --> */}
              <div
                className="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-lg">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="staticBackdropLabel">
                        Description
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div className="card-body">
                        <h5 className="card-title">Web Design</h5>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Laborum optio, sit incidunt aut explicabo
                          similique mollitia? Voluptatem, doloribus?
                          Accusantium, similique veniam consequatur sed sint ad
                          dolor illum sapiente vel temporibus!
                        </p>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
