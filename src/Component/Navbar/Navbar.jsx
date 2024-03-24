import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <ul>
        <li>
          <Link to="/">Task-1</Link>
        </li>
        <li>
          <Link to="task-2">Task-2</Link>
        </li>
        <li>
          <Link to="task-3">Task-3</Link>
        </li>
        <li>
          <Link to="task-4">Task-4</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
