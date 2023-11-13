import React from "react";

const SignIn = () => {
  return (
    <>
      <h2>Sign In</h2>
      <form>
        <input type="text" name="username" placeholder="Username" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default SignIn;
