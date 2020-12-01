import React from "react";
const AboutHeader = () => {
  return (
    <div>
      <div
        style={{
          textAlign: "center",
          fontSize: 42,
          padding: 10,
        }}
      >
        About Us
      </div>
      <div
        style={{
          borderTop: "3px dashed #bbb",
          //   textAlign: "center",
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
    fontFamily: "sans-serif",
    flexDirection: "row",
  };
  const imageStyle = { height: 50, width: 50, borderRadius: 50 / 2 };
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
              fontFamily: "roboto",
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
              backgoundColor: "black",
            }}
          >
            <img src="../github.png" alt="github" style={imageStyle} />
            <img src="../insta.png" style={imageStyle} />
            <img src="../linkedin.png" style={imageStyle} />
            <img src="../twitter.png" style={imageStyle} />
            <img src="../youtub.png" style={imageStyle} />
          </div>
          <div style={{ paddingTop: 10 }}>Email: sonalijain057@gmail.com</div>
          <div>Web: https://github.com/Sonalijin/Demo</div>
        </div>
      </div>
      <AboutHeader />
    </div>
  );
};
export default Header;
