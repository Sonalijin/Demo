import React from "react";
import { Login } from "./Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SignUp } from "./SignUp";
export const LoginRoute = () => {
  return (
    <Router>
      <Switch>
        <div
          style={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#6960EC",
          }}
        >
          <Route path="/" exact component={() => <Login name="Login" />} />
          <Route
            path="/SignUp"
            exact
            component={() => <SignUp name="SignUp" />}
          />
        </div>
      </Switch>
    </Router>
  );
};
export default LoginRoute;
