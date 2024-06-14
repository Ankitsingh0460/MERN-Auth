import React from "react";
import { FaSignInAlt } from "react-icons/fa";
import { IoCreate } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLogoutMutation } from "../slices/usersApi";
import { logout } from "../slices/authSlice";
import { CiLogout } from "react-icons/ci";

function Header() {
  const { userInfo } = useSelector((state) => state.auth);
  const [logoutApiCall] = useLogoutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container-fluid ">
          <Link to="/">
            <a className="navbar-brand logo">MERN-Auth</a>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse navbardiv"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav m-2 ">
              {userInfo ? (
                <button
                  className="nav-link active "
                  aria-current="page"
                  onClick={logoutHandler}
                >
                  <CiLogout />
                  LogOut
                </button>
              ) : (
                <Link
                  to="/signin"
                  className="nav-link active "
                  aria-current="page"
                >
                  <FaSignInAlt />
                  LogIn
                </Link>
              )}

              <Link to="/signup" className="nav-link">
                <IoCreate />
                SignUp
              </Link>
              {userInfo ? (
                <Link to="/profile" className="nav-link">
                  <CgProfile /> {userInfo.name}
                </Link>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
