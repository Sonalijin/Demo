import React from "react";

const AboutHeader = () => {
  return (
    <div>
      <div
        style={{
          textAlign: "center",
          fontSize: 42,
          padding: 10,
          fontFamily: "Jost-Bold",
        }}
      >
        About Us
      </div>
      <div
        style={{
          borderTop: "3px dashed #bbb",
        }}
      ></div>
    </div>
  );
};
const Header = (props) => {
  const textStyle = {
    padding: 10,
    overflowX: "hidden",
    overflowY: "hidden",
    marignTop: 50,
    fontSize: 24,
    fontFamily: "Jost-Medium",
    flexDirection: "row",
  };
  const imageStyle = {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    cursor: "pointer",
  };
  return (
    <div>
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ flexDirection: "column", display: "flex" }}>
          <div
            style={{
              padding: 10,
              fontSize: 48,
              fontWeight: 500,
              fontFamily: "Jost-Bold",
            }}
          >
            Sonali Jain
          </div>
          <div style={textStyle}>{props.children}</div>
        </div>
        <div
          style={{
            flexDirection: "column",
            display: "flex",
          }}
        >
          <div
            style={{
              flexDirection: "row",
              display: "flex",
            }}
          >
            <img
              src="../github.png"
              onClick={() => {
                const url = "https://github.com/Sonalijin/Demo";
                window.open(url, "_blank");
              }}
              style={imageStyle}
            />

            <img
              src="../instagram.png"
              onClick={() => {
                window.open("https://www.instagram.com/sonalij460/", "_blank");
              }}
              style={imageStyle}
            />

            <img
              src="../linkedin.png"
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/sonali-jain-33a6a713a/",
                  "_blank"
                );
              }}
              style={imageStyle}
            />

            <img
              src="../twitter.png"
              onClick={() => {
                window.open("https://twitter.com/sonalij460", "_blank");
              }}
              style={imageStyle}
            />

            <img
              src="../youtube.png"
              onClick={() => {
                window.open(
                  "https://www.youtube.com/channel/UCYRTzNe8sMCC88IiUv85SKA?view_as=subscriber",
                  "_blank"
                );
              }}
              style={imageStyle}
            />
          </div>
          <div
            style={{
              paddingTop: 10,
              fontFamily: "Jost-Regular",
              fontSize: 20,
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            Email: sonalijain057@gmail.com
          </div>
          <div
            style={{
              paddingTop: 10,
              fontFamily: "Jost-Regular",
              fontSize: 20,
              cursor: "pointer",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
            onClick={() => {
              const url = "https://github.com/Sonalijin/Demo";
              window.open(url, "_blank");
            }}
          >
            Web: https://github.com/Sonalijin/Demo
          </div>
        </div>
      </div>
      <AboutHeader />
    </div>
  );
};

export default Header;
