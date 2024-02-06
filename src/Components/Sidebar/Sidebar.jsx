import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside>
      <ul>
        <li>
          <Link to="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link to="/history">
            <a>History</a>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
