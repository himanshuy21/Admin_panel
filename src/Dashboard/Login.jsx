import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
function LoginPage() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const emailChange = (e) => {
    setEmail(e.target.value);
  };
  const passChange = (e) => {
    setPass(e.target.value);
  };
  const OnClickHandler = (e) => {
    console.log(email);
    console.log(pass);
    e.preventDefault();
    setEmail("");
    setPass("");
  };
  return (
    <>
      <div className="col-md-4 ms-sm-auto col-lg-7 px-md-4 mt-4 ">
        <div className="d-flex align-items-center ">
          <form className="form-signin ">
            <h1 className="h3 mb-3 font-weight-normal"> Sign in</h1>
            <label htmlFor="inputEmail" className="sr-only">
              Email address
            </label>
            <input
              value={email}
              type="email"
              id="inputEmail"
              className="form-control"
              placeholder="Email address"
              required=""
              autofocus=""
              onChange={emailChange}
            />
            <label htmlFor="inputPassword" className="sr-only">
              Password
            </label>
            <input
              value={pass}
              type="password"
              id="inputPassword"
              className="form-control"
              placeholder="Password"
              required=""
              onChange={passChange}
            />
            <button
              className="btn btn-lg btn-primary btn-block mt-4"
              type="submit"
              onClick={OnClickHandler}
            >
              <Link to="/overview" className="text-light">
                Sign in
              </Link>
            </button>
            <p className="mt-5 mb-3 text-muted">© 2023</p>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
