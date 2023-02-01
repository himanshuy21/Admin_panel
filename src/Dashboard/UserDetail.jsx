import React from "react";
import porfile from "./Overview_images/Profile.jpg";
function UserDetail() {
  return (
    <>
      <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4 mt-4">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={porfile}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <p className="card-text d-flex">
                  <h6>UserName : </h6>
                  <small className="text-muted">Himanshu Yadav</small>
                </p>
                <p className="card-text d-flex">
                  <h6>Mail-id :</h6>
                  <small className="text-muted">himanshu@aimerse.in</small>
                </p>
                <p className="card-text d-flex">
                  <h6>Contact Number: </h6>
                  <small className="text-muted">851606XXXX</small>
                </p>
                <h5 className="card-title">About User</h5>
                <p className="card-text">
                  <small className="text-muted">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Animi adipisci quibusdam doloremque officia perspiciatis eum
                    cum ipsum dignissimos enim deserunt unde ratione eaque
                    asperiores, modi quia autem maiores, explicabo
                    reprehenderit?
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserDetail;
