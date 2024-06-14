import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Profile() {
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <>
      <div className=" profilediv ">
        <h1 className="profilename">Profile</h1>
        <div className="containtdiv">
          {userInfo ? (
            <>
              <label className="labeless">Id</label>
              <input className="inp" name="_id" value={userInfo._id} disabled />
              <label className="labeless">Name</label>
              <input
                className="inp"
                name="name"
                value={userInfo.name}
                disabled
              />
              <label className="labeless">Email</label>
              <input
                className="inp"
                name="email"
                value={userInfo.email}
                disabled
              />
            </>
          ) : (
            <>
              <label className="labeless">Id</label>
              <input className="inp" name="_id" value="" disabled />
              <label className="labeless">Name</label>
              <input className="inp" name="name" value="" disabled />
              <label className="labeless">Email</label>
              <input className="inp" name="email" value="" disabled />
            </>
          )}

          <h6 className="upd mr-2">
            Update Profile? <Link to="/updateprofile">click here</Link>
          </h6>
        </div>
      </div>
    </>
  );
}

export default Profile;
