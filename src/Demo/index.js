import React from "react";
import Footer from "./Footer";
import Header from "./Header";
//import Img from "./Img";
import InformationCard from "./InformationCard";

const MyResume = (props) => {
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        backgroundColor: "#aaa",
        padding: 16,
      }}
    >
      <Header>Associate Software Engineer</Header>

      <InformationCard />
      <Footer />
    </div>
  );
};
export default MyResume;
