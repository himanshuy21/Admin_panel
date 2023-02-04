import React from "react";
import porfile from "./Overview_images/Profile.jpg";
import Dashboard from "./Dashboard";
import HeadersPage from "./Header";
import { Link } from "react-router-dom";
import Footer from "./Footer";
function UserDetail() {
  return (
    <>
      <HeadersPage />
      <Dashboard />
      <div className="content">
        <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4 mt-4">
          <div className=" mb-3 d-flex justify-content-center flex-wrap flex-md-nowrap">
            <div className="card" style={{ minWidth: "300px" }}>
              <div className="col-md-5">
                <img
                  src={porfile}
                  className="card-img-top"
                  style={{ minWidth: "320px", minHeight: "300px" }}
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <p className="card-text d-flex">
                    <strong className="text-muted">Himanshu Yadav</strong>
                  </p>
                </div>
              </div>
            </div>
            <div className="card" style={{ minWidth: "300px" }}>
              <div className="card-body">
                <p className="card-text">
                  <p className="card-text ">
                    <h6>About :</h6>
                    {/* <br /> */}
                    <small className="text-muted">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content. Lorem ipsum dolor
                      sit amet consectetur adipisicing elit. Similique beatae
                      commodi, dicta earum maiores ! Iusto deleniti architecto
                      ex non ipsum ratione eveniet. Lorem ipsum dolor sit amet
                      consectetur, adipisicing elit. Aliquid rem placeat
                      eveniet? Quisquam mollitia accusamus laborum? In nam,
                      nulla, aperiam libero, quaerat maiores eos pariatur
                      debitis natus minus magni ea.
                    </small>
                  </p>
                </p>
                <p className="card-text d-flex">
                  <h6>Mail-id :</h6>
                  <small className="text-muted">
                    himanshuyadav2102@gmail.com
                  </small>
                </p>
                <p className="card-text d-flex">
                  <h6>Contact Number: </h6>
                  <small className="text-muted">851606XXXX</small>
                </p>
                <div className="card-text d-flex justify-content-around">
                  <button className="btn btn-primary">
                    <Link to="/" className="text-light">
                      Log Out
                    </Link>
                  </button>
                  <button className="btn btn-danger">
                    <Link to="/" className="text-light">
                      Update
                    </Link>
                  </button>
                  <button className="btn btn-success">
                    <Link to="/" className="text-light">
                      Setting
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserDetail;
