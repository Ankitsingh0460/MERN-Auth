import React from "react";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <>
      <div className=" profilediv ">
        <h1 className="profilename">Profile</h1>
        <div className="containtdiv">
          <label className="labeless">Id</label>
          <input className="inp" name="_id" value="12345" disabled />
          <label className="labeless">Name</label>
          <input className="inp" name="name" value="Ankit" disabled />
          <label className="labeless">Email</label>
          <input
            className="inp"
            name="email"
            value="singhankit0460@gmail.com"
            disabled
          />
          <h6 className="upd mr-2">
            Update Profile? <Link to="/updateprofile">click here</Link>
          </h6>
        </div>
      </div>
    </>
  );
}

export default Profile;
