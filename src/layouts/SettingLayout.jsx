import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const SettingLayout = ({ children }) => {
  return (
    <>
      <header>
        <nav></nav>
      </header>
      <aside>
        <nav>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/discover">Discover</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/profile">Profile</NavLink>
        </nav>
      </aside>
      <aside>
        <NavLink to="/profile/information">Porfile Information</NavLink>
        <NavLink to="/profile/notification">Profile Notification</NavLink>
        <NavLink to="/profile/password-manager">Password Manager</NavLink>
        <NavLink to="/profile/helper-center">Helper Center</NavLink>
      </aside>
      <main>{children}</main>
    </>
  );
};

export default SettingLayout;
