import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <>
      <ul>
        <li>
          <a href="/auth/sign-in">Sign In</a>
        </li>
        <li>
          <a href="/auth/sign-up">Sign Up</a>
        </li>
        <li>
          <a href="/auth/reset-password">Reset Password</a>
        </li>
      </ul>
      <main>{children}</main>
      <footer>Heloo, I'm footer</footer>
    </>
  );
};

export default AuthLayout;
