import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>BlogApp</h1>
      <NavLink to="/" activeclassname="active">
        Home
      </NavLink>
      <NavLink to="/blogs" activeclassname="active">
        Blogs
      </NavLink>
      <NavLink to="/create" activeclassname="active">
        Create
      </NavLink>
      <NavLink to="/contact" activeclassname="active">
        contact
      </NavLink>
    </header>
  );
}

export default Header;
