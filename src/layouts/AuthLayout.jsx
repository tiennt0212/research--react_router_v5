import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const AuthLayout = ({ children }) => {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/auth/sign-in">Sign In</NavLink>
        </li>
        <li>
          <NavLink to="/auth/sign-up">Sign Up</NavLink>
        </li>
        <li>
          <NavLink to="/auth/reset-password">Reset Password</NavLink>
        </li>
      </ul>
      <main>{children}</main>
      <footer>Heloo, I'm footer</footer>
    </>
  );
};

export default AuthLayout;
