import React from "react";
import "../Dashboard/Overview.css";
import Dashboard from "./Dashboard";
import HeadersPage from "./Header";
import BarCharts from "./BarChart";
import Footer from "./Footer";
function Overview() {
  return (
    <>
      <Dashboard />
      <HeadersPage />

      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4" id="content">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom border-primary mb-3 w-100">
          <h1 className="h2">Overview</h1>
          <div className="btn-toolbar mb-2 mb-md-0">
            <div className="btn-group me-2">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                Share
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                Export
              </button>
            </div>
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary dropdown-toggle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-calendar"
                aria-hidden="true"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              This week
            </button>
          </div>
        </div>
        <div className="d-flex flex-wrap flex-md-nowrap justify-content-between align-items-center pt-3 pb-2 mb-3 border-bottom">
          <div className="col-md-6 col-xl-3 mb-r ">
            <div className="card cascading-admin-card bg-info text-dark p-4 mb-4 ">
              <div className="admin-up">
                <div className="data d-flex justify-content-between ">
                  <p>TRAFFIC</p>
                  <h4>
                    <strong>20000</strong>
                  </h4>
                </div>
              </div>
              <div className="card-body">
                <div className="progress">
                  <div
                    aria-valuemax="100"
                    aria-valuemin="0"
                    aria-valuenow="25"
                    className="progress-bar grey darken-2"
                    role="progressbar"
                    style={{ width: "75%" }}
                  ></div>
                </div>
                <p className="card-text">Worse than last week (75%)</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-3 mb-r ">
            <div className="card cascading-admin-card bg-warning text-dark p-4 mb-4">
              <div className="admin-up">
                <div className="data d-flex justify-content-between ">
                  <p>TRAFFIC</p>
                  <h4>
                    <strong>20000</strong>
                  </h4>
                </div>
              </div>
              <div className="card-body">
                <div className="progress">
                  <div
                    aria-valuemax="100"
                    aria-valuemin="0"
                    aria-valuenow="25"
                    className="progress-bar grey darken-2"
                    role="progressbar"
                    style={{ width: "75%" }}
                  ></div>
                </div>
                <p className="card-text">Worse than last week (75%)</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-3 mb-r ">
            <div className="card cascading-admin-card bg-primary text-white p-4 mb-4">
              <div className="admin-up">
                <div className="data d-flex justify-content-between ">
                  <p>TRAFFIC</p>
                  <h4>
                    <strong>20000</strong>
                  </h4>
                </div>
              </div>
              <div className="card-body">
                <div className="progress">
                  <div
                    aria-valuemax="100"
                    aria-valuemin="0"
                    aria-valuenow="25"
                    className="progress-bar grey darken-2"
                    role="progressbar"
                    style={{ width: "75%" }}
                  ></div>
                </div>
                <p className="card-text">Worse than last week (75%)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <BarCharts />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Overview;
