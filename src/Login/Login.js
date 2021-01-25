import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { FarmerLogoIcon } from "../images";

export const Login = () => {
  const history = useHistory();
  const [email, setemail] = useState(void 0);
  const [password, setpassword] = useState(void 0);
  const [errors, setErrors] = useState({});
  return (
    <div
      style={{
        display: "flex",
        height: "70%",
        width: "70%",
        backgroundColor: "#fff",
        borderRadius: 8,
        "box-shadow": "0px 6px 34px -5px rgba(0,0,0,0.74)",

        flexDirection: "row",
      }}
    >
      <div style={{ display: "flex", flex: 1 }}>
        <img src={FarmerLogoIcon} style={{ flex: 1 }} />
      </div>
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: " column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ display: "flex", fontSize: 24, margin: 20 }}>
          {" "}
          Login Here
        </div>

        {errors.serverError && <div>{errors.serverError}</div>}

        <input
          name="Email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setemail(e.target.value);
          }}
          style={{
            display: "flex",
            padding: "10px 12px",
            margin: 5,
            borderRadius: 20,
            outline: "none",
            backgroundColor: "",
            borderWidth: 1,
            borderColor: "rgba(0, 0, 0, 0.2)",
            backgroundColor: "#e7e7e7",
            marginTop: 20,

            width: "60%",
          }}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onchange={setpassword}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
          style={{
            display: "flex",
            padding: "10px 12px",
            margin: 5,
            borderRadius: 20,
            outline: "none",
            backgroundColor: "",
            borderWidth: 1,
            borderColor: "rgba(0, 0, 0, 0.2)",
            backgroundColor: "#e7e7e7",
            width: "60%",
          }}
          required
        />
        <div
          onClick={() => {
            axios
              .post(`http://localhost:3000/app/login`, {
                email,
                password,
              })

              .then((res) => {
                const { data } = res;

                if (data && data.status) {
                  history.push("/Chat");
                } else {
                  setErrors({ serverError: data.msg });
                }
                console.log("@@@@@@server se call bapas a gai", res);
              })
              .catch((err) => {
                console.log("@@@@get error", err);
              });
          }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "60%",
            backgroundColor: "#6fb554",
            alignItems: "center",
            justifyContent: "center",
            padding: 10,
            borderRadius: 20,
            marginTop: 20,
            color: "#fff",
          }}
        >
          Login
        </div>
        <div style={{ display: "flex", flexDirection: "row", marginTop: 20 }}>
          <div style={{ paddingLeft: 4 }}>
            You haven't Account
            <Link to="/SignUp"> SignUp Here.</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
