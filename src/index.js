import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import Navbar from './components/Navbar'
import MyResume from "./Demo";

const App = (props) => {
  return <MyResume {...props} />;
};

ReactDOM.render(<App />, document.getElementById("root"));
