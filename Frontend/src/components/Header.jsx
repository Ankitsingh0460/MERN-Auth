import React from "react";
import { FaSignInAlt } from "react-icons/fa";
import { IoCreate } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

function Header() {
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
              <Link
                to="/signin"
                className="nav-link active "
                aria-current="page"
              >
                <FaSignInAlt />
                LogIn
              </Link>

              <Link to="/signup" className="nav-link">
                <IoCreate />
                SignUp
              </Link>
              <Link to="/profile" className="nav-link">
                <CgProfile /> Profile
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
