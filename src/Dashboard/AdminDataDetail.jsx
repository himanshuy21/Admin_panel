import React from "react";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import HeadersPage from "./Header";
export default function AdminData() {
  return (
    <>
      <HeadersPage />
      <Dashboard />
      <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4 mt-4">
        <div className="card mb-4" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Employee Details</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
              numquam recusandae tempore ratione quia accusantium, nam fugiat
              quos quam dolorum molestias quod, excepturi provident voluptatem
              aliquid sed minus natus? Voluptate!
            </p>
            <a href="#" className="btn btn-danger">
              Edit
            </a>
            <a href="#" className="btn btn-primary">
              Save
            </a>
          </div>
        </div>
        <button className="btn btn-primary ">
          <Link to="/datatable" className="text-white">
            Back
          </Link>
        </button>
      </div>
    </>
  );
}
