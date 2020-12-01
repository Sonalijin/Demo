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
        backgroundColor: "#fff",
        //alignItems: "center",
        display: "flex",
        flexDirection: "column",
        overflowX: "hidden",
        overflowY: "hidden",
        maxWidth: 1400,
        margin: "auto",
        height: "100%",
        width: "100%",
        backgroundColor: "#aaa",
      }}
    >
      <Header>Associate Software Engineer</Header>

      <InformationCard />
      <Footer />
    </div>
  );
};
export default MyResume;
