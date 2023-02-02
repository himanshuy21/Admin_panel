import React from "react";
import Dashboard from "./Dashboard";
import HeadersPage from "./Header";
const Changes = (e) => {
  console.log(e.target.value);
};
function DataTable() {
  return (
    <>
      <HeadersPage />
      <Dashboard />
      <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4 mt-4">
        <h2>Admin's Data</h2>
        {/* <!-- Button trigger modal --> */}
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          Add
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
          <div className="modal-dialog ">
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="modal-title fs-5 " id="staticBackdropLabel ">
                  Add the Details
                </h2>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Email address"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Contact"
                    />
                  </div>
                  <div className="input-group mb-3">
                    <select className="form-select" id="inputGroupSelect01">
                      <option selected>Status.</option>
                      <option value="1">Active</option>
                      <option value="2">Unactive</option>
                    </select>
                  </div>
                </form>
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
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="table-responsive mt-4">
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th scope="col">S.no</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Contact</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>XYZ</td>
                <td>syz@emaple.com</td>
                <td>756XXXXXX</td>
                <td>Active</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default DataTable;
