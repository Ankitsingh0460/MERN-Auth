import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setCredentials } from "../slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRegisterMutation } from "../slices/usersApi";

function SignUp() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [ragister, { isLoading }] = useRegisterMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await ragister({ name, email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate("/");
    } catch (err) {
      alert(err.data);
    }
  };

  return (
    <>
      <form onSubmit={onHandleSubmit}>
        <div className="d-flex justify-content-center mt-4">
          <h1>SignUp</h1>
        </div>
        <div className="container flex justify-center mt-4">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Full Name
            </label>
            <input
              type="name"
              className="form-control"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
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
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {isLoading && (
            <div className="d-flex justify-content-center mb-4">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary ">
              Submit
            </button>
          </div>
          <h6 className="mt-4">
            Have an Account?<Link to="/signin">click here</Link>
          </h6>
        </div>
      </form>
    </>
  );
}

export default SignUp;
