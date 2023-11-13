import React from "react";

const ResetPw = () => {
  return (
    <>
      <h2>Reset Password</h2>
      <form>
        <input type="password" name="password" placeholder="Password" />
        <input type="password" name="newPassword" placeholder="New password" />
        <input
          type="password"
          name="retypeNewPassword"
          placeholder="Retype new password"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default ResetPw;
