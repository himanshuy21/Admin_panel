import React from "react";
import banner1 from "../servicesPhoto/banner-1.JPG";
function Services() {
  return (
    <>
      <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div className=" mt-4 mb-4">
          <h3>Services</h3>
          <button className="btn btn-secondary">Add Details</button>
        </div>
        <div className="card mb-3">
          <img src={banner1} className="img-thumbnail" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Web Design</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
              optio, sit incidunt aut explicabo similique mollitia? Voluptatem,
              doloribus? Accusantium, similique veniam consequatur sed sint ad
              dolor illum sapiente vel temporibus!
            </p>
            <button className="btn btn-primary">Description</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
