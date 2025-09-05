import React from "react";
import UserDetails from "./UserDetails";
import UserInfo from "./UserInfo";

function ProfilePage() {
  return (
    <div>
      <h2>Profile Page</h2>
      <UserDetails />  {/* no props */}
      <UserInfo />     {/* no props */}
    </div>
  );
}

export default ProfilePage;