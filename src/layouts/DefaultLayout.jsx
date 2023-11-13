import React from "react";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <header>
        <nav>
          <a href="/home">Home</a>
          <a href="/discover">Discover</a>
          <a href="/blog">Blog</a>
          <a href="/profile">Profile</a>
        </nav>
      </header>
      <main>{children}</main>
      <footer></footer>
    </>
  );
};

export default DefaultLayout;
