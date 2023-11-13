import React from "react";

const SettingLayout = ({ children }) => {
  return (
    <>
      <header>
        <nav></nav>
      </header>
      <aside>
        <nav>
          <a href="/home">Home</a>
          <a href="/discover">Discover</a>
          <a href="/blog">Blog</a>
          <a href="/profile">Profile</a>
        </nav>
      </aside>
      <aside>
        <a href="/profile/information">Porfile Information</a>
        <a href="/profile/notification">Profile Notification</a>
        <a href="/profile/password-manager">Password Manager</a>
        <a href="/profile/helper-center">Helper Center</a>
      </aside>
      <main>{children}</main>
    </>
  );
};

export default SettingLayout;
