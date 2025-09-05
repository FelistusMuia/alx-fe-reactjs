import React, { useContext } from "react";
import UserContext from "./UserContext";

function UserInfo() {
  const user = useContext(UserContext);

  return (
    <div>
      <h3>User Info</h3>
      <p>{user.name} — {user.email}</p>
    </div>
  );
}

export default UserInfo;