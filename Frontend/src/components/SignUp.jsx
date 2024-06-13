import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <>
      <form>
        <div class="d-flex justify-content-center mt-4">
          <h1>SignUp</h1>
        </div>
        <div className="container flex justify-center mt-4">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Full Name
            </label>
            <input type="name" class="form-control" id="name" />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <button type="submit" class="btn btn-primary ">
            Submit
          </button>
          <h6 className="mt-4">
            Have an Account?<Link to="/signin">click here</Link>
          </h6>
        </div>
      </form>
    </>
  );
}

export default SignUp;
