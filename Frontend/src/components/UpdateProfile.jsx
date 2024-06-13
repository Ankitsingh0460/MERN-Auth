import React from "react";

function UpdateProfile() {
  return (
    <>
      <form>
        <div className=" profilediv ">
          <h1 className="profilename">Update Profile</h1>
          <div className="containtdiv">
            <label className="labeless">New Name</label>
            <input className="inpu" name="name" />
            <label className="labeless">New Email</label>
            <input className="inpu" name="email" />
            <label className="labeless">New Password</label>
            <input className="inpu" name="password" />
            <button type="button" class="btn btn-primary mt-2">
              Update
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default UpdateProfile;
