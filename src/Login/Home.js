import React from "react";
import { useHistory } from "react-router-dom";

function Home() {
  let logout = useHistory();
  return (
    <div>
      <div
        style={{
          display: "flex",
          width: "100%",
          margin: "0 0 3em 0",
          padding: 0,
          backgroundColor: " #333",
          borderBottom: "1px solid #ccc",
          borderTop: "1px solid #ccc",
        }}
      >
        <div>Home</div>
        <div>Projects</div>
        <div>Skill</div>
      </div>
      <div>Welcome sonali</div>
      <button
        onClick={() => {
          logout.push("/");
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Home;
