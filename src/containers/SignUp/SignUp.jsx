import React from "react";

const SignUp = () => {
  return (
    <>
      <h2>Sign Up</h2>
      <form>
        <input type="text" name="username" placeholder="Username" />
        <input type="password" name="password" placeholder="Password" />
        <input
          type="password"
          name="retypePassword"
          placeholder="Retype password"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default SignUp;
