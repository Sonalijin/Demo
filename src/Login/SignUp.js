import React, { useState, useEffect } from "react";
import axios from "axios";
import { FarmerLogoIcon } from "../images";
import { Link } from "react-router-dom";

export const SignUp = () => {
  const [email, setemail] = useState(void 0);
  const [userName, setUsername] = useState(void 0);
  const [password, setpassword] = useState(void 0);
  const [confirmPassword, setConfirmPassword] = useState(void 0);

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
        <div style={{ display: "flex", fontSize: 24 }}> SignUp Here</div>
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
        />
        <input
          name="Username"
          type="text"
          placeholder="Username"
          value={userName}
          onChange={(e) => {
            setUsername(e.target.value);
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
        />
        <input
          type="password"
          name="password"
          placeholder="New Password"
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
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={confirmPassword}
          onchange={setConfirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
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
        />
        <div
          onClick={() => {
            console.log(
              "@@@hello world",
              email,
              userName,
              password,
              confirmPassword
            );

            /* axios
              .get(`http://localhost:3001`)
              .then((res) => {
                console.log("@@@@@@server se call bapas a gai", res);
              })
              .catch((err) => {
                console.log("@@@@get error", err);
              });*/
            axios
              .post(`http://localhost:3001/login`, {
                email,
                userName,
                password,
                confirmPassword,
              })
              .then((res) => {
                localStorage.setItem("token", JSON.stringify(res));
                localStorage.getItem("token");
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
          SignUp
        </div>
        <div style={{ display: "flex", flexDirection: "row", marginTop: 20 }}>
          <div>You Account</div>
          <div style={{ paddingLeft: 4 }}>
            <Link to="/"> Login Here.</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
