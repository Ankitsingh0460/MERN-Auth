import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../slices/usersApi";
import { setCredentials } from "../slices/authSlice";

function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate("/");
    } catch (error) {
      if (error.response) {
        alert("error" + error.response.data.message);
      }
    }
  };
  return (
    <>
      <form onSubmit={onHandleSubmit}>
        <div className="d-flex justify-content-center mt-4 ">
          <h1>SignIn</h1>
        </div>

        <div className="container flex justify-center mt-4 ">
          <div className="mb-4">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control "
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control w-4"
              id="exampleInputPassword1"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {isLoading && (
            <div class="d-flex justify-content-center mb-4">
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary ">
              Submit
            </button>
          </div>
          <h6 className="mt-4">
            Create Account?<Link to="/signup">click here</Link>
          </h6>
        </div>
      </form>
    </>
  );
}

export default SignIn;
