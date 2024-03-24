import React from "react";
import "../../Pages/Task_3/Task_3.css";

const User = ({ user }) => (
  <div className="user-wrapper">
    <h2>User Information</h2>
    <div className="user-email">{user.email}</div>
  </div>
);

export default User;
