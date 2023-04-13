import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header>
        <h1>Blog App</h1>
        <NavLink to={"/home"}>Home</NavLink>
        <NavLink to={"/blogs"}>Blogs</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
        <NavLink to={"/create"}>Create Blog</NavLink>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default Header;
