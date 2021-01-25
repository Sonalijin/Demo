import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//import Navbar from "./components/Navbar";
//import MyResume from "./Demo";
import LoginRoute from "./Login";
import socketClient from "socket.io-client";
import * as serviceWorker from "./serviceWorker";

const App = (props) => {
  // var socket = socketClient(`ws://localhost:3001`, {
  //   transports: ["websocket"],
  //   reconnectionDelay: 1000,
  //   reconnection: true,
  //   reconnectionAttempts: 10,
  //   transports: ["websocket"],
  //   agent: false, // [2] Please don't set this to true
  //   upgrade: false,
  //   rejectUnauthorized: false,
  // });

  // socket.on("connection", () => {
  //   console.log(`I'm connected with the back-end`);
  // });
  return <LoginRoute {...props} />;
};

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
