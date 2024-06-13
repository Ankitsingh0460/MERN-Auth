import React from "react";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <>
      <form>
        <div class="d-flex justify-content-center mt-4 ">
          <h1>SignIn</h1>
        </div>

        <div className="container flex justify-center mt-4 ">
          <div className="mb-4">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control "
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control w-4"
              id="exampleInputPassword1"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <h6 className="mt-4">
            Create Account?<Link to="/signup">click here</Link>
          </h6>
        </div>
      </form>
    </>
  );
}

export default SignIn;
