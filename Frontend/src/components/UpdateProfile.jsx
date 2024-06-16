import { useState, useEffect } from "react";
// import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useProfileUpdateMutation } from "../slices/usersApi";
import { setCredentials } from "../slices/authSlice";

const UpdateProfile = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);

  const [updateProfile, { isLoading }] = useProfileUpdateMutation();

  useEffect(() => {
    setName(userInfo.name);
    setEmail(userInfo.email);
  }, [userInfo.email, userInfo.name]);

  const onHandleSubmits = async (e) => {
    e.preventDefault();
    try {
      const res = await updateProfile({
        _id: userInfo._id,
        name,
        email,
        password,
      }).unwrap();

      dispatch(setCredentials({ ...res }));
    } catch (err) {
      alert(err.data);
    }
  };
  return (
    <>
      <form onSubmit={onHandleSubmits}>
        <div className="d-flex justify-content-center mt-4">
          <h1>Update Profile</h1>
        </div>
        <div className="container flex justify-center mt-4">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              New Name
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
              New Email address
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
              New Password
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
              Update
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default UpdateProfile;
