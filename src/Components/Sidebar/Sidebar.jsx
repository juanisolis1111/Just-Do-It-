import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
