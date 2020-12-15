import React from "react";
import { Login } from "./Login";

export const LoginRoute = () => {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "yellow"
      }}
    >
      <Login />
    </div>
  );
};
export default LoginRoute;
