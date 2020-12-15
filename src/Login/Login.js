import React, { useState } from "react";
import { FarmerLogoIcon } from "../images";

export const Login = () => {
  const [email, setemail] = useState(void 0);
  const [password, setpassword] = useState(void 0);
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
          // justifyContent: "center",
        }}
      >
        <div style={{ display: "flex", fontSize: 24, margin: 20 }}>
          {" "}
          Login Here
        </div>
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
          type="password"
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
        />
        <div
          onClick={() => {
            console.log("@@@@@hello world", email, password);
            
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
      </div>
    </div>
  );
};
