import React from "react";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import HeadersPage from "./Header";
import banner1 from "../servicesPhoto/banner-2.JPG";
export default function Description() {
  return (
    <>
      <HeadersPage />
      <div className="container-fluid">
        <div className="row">
          <Dashboard />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className=" mt-4 mb-4">
              <div className="h2">Description</div>
            </div>
            <div className=" mb-3 d-flex  justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2  ">
              <img
                src={banner1}
                className="card-img-top"
                alt="..."
                style={{ width: "400px" }}
              />
              <div className="card-body ">
                <h5 className="card-title">Web design</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Consectetur cupiditate autem molestiae soluta dolor,
                  aliquam magnam? Consequatur qui quos et veniam natus, velit id
                  fugit laudantium voluptatibus delectus harum fugiat?
                </p>
                <button className="btn btn-primary">
                  <Link to="/services" className="text-white">
                    Back
                  </Link>
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
