import React from "react";
function hoverEvent(e) {
  e.target.style.textDecoration = "underline";
}
function hoverOut(e) {
  e.target.style.textDecoration = "";
}
const InformationCard = () => {
  const Img = () => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          backgroundColor: "lightgray",
          borderWidth: 2,
          height: 150,
          width: 150,
          borderRadius: 150 / 2,
        }}
      >
        <img
          src="../woman.png"
          style={{
            height: 150,
            width: 150,
            borderRadius: 150 / 2,
          }}
        />
      </div>
    );
  };
  const LittleMore = () => {
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
          Little More About Me
        </div>
        <div
          style={{
            borderTop: "3px dashed #bbb",
            textAlign: "center",
          }}
        ></div>
        <div
          style={{
            fontSize: 20,
            padding: 10,
            fontFamily: "Jost-Regular",
          }}
        >
          Alongside my interests in software engineering some of my other
          interests and hobbies are:
          <ul>
            <li>Mobile Gaming</li>
            <li>Travelling</li>
            <li>Becoming Ninja</li>
          </ul>
        </div>
      </div>
    );
  };
  const Education = () => {
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
          Education
        </div>
        <div
          style={{
            borderTop: "3px dashed #bbb",
            textAlign: "center",
          }}
        ></div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marign: 10,
              padding: 10,
              flexBasis: "40%",
            }}
          >
            <div
              style={{
                fontSize: 36,
                paddingTop: 5,
                fontFamily: "Jost-Medium",
              }}
            >
              GLA University
            </div>
            <div
              style={{
                fontSize: 20,
                paddingTop: 5,
                fontFamily: "Jost-Regular",
              }}
            >
              Bachelor of Technology
            </div>
            <div
              style={{
                fontSize: 20,
                paddingTop: 5,
                fontFamily: "Jost-Regular",
              }}
            >
              2015 - 2019
            </div>
          </div>
          <div
            style={{
              fontSize: 20,
              padding: 10,
              fontFamily: "Jost-Regular",
            }}
          >
            During my time at GLA I learnt most of my key skills that have I
            have taken through my career such as teamwork and working to tight
            deadlines. I thouroughly enjoyed my time as university and learnt a
            lot about a healthy work life balance.
          </div>
        </div>
      </div>
    );
  };
  const Experience = () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: 10,
            margin: 10,
            flexBasis: "40%",
          }}
        >
          <div
            style={{
              fontSize: 36,
              fontFamily: "Jost-Medium",
            }}
          >
            NIIT LTD
          </div>
          <div
            style={{
              fontSize: 20,
              fontFamily: "Jost-Regular",
              cursor: "pointer",
            }}
            onMouseEnter={hoverEvent}
            onMouseOut={hoverOut}
          >
            www.niit.com
          </div>
          <div
            style={{
              fontSize: 20,

              fontFamily: "Jost-Regular",
              paddingTop: 5,
            }}
          >
            Associate Software Engineer
          </div>
          <div style={{ fontSize: 20, fontFamily: "Jost-Regular" }}>
            August 2019 - November 2020
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              fontSize: 20,
              fontFamily: "Jost-Regular",
              paddingTop: 10,
            }}
          >
            Every IT company needs its Software Developer and The NIIT LTD
            Compay is no exception. I play my part making sure the whole company
            stays connected. I am enjoy driving the company to try new
            technologies.
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          paddingTop: 20,
        }}
      >
        <Img />

        <div
          style={{
            fontFamily: "Jost-Regular",
            fontSize: 20,
            textAlign: "center",
            paddingLeft: 16,
          }}
        >
          An enthusiastic highly motivated and leadership quality, a bachelor's
          degree in Computer Science Engineering. Eager to learn new
          technologies and methodologies.
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
          fontSize: 42,
          padding: 10,
          fontFamily: "Jost-Bold",
        }}
      >
        Project
      </div>
      <div
        style={{
          borderTop: "3px dashed #bbb",
          textAlign: "center",
        }}
      ></div>
      <div
        style={{
          textAlign: "center",
          fontSize: 36,
          fontFamily: "Jost-Medium",
          padding: 10,
        }}
      >
        Super awesome project
      </div>
      <div
        style={{
          textAlign: "center",
          fontSize: 20,
          fontFamily: "Jost-Regular",
          padding: 10,
        }}
      >
        This is probably one of the greatest apps ever created, if you don't
        agree you're probably wrong.
      </div>
      <div
        style={{
          textAlign: "center",
          fontSize: 20,
          fontFamily: "Jost-Regular",
          padding: 10,
        }}
      >
        I started this project as a way if learning React and it has since grown
        into a fully fledged app. I have learned many skills through this and
        been I’m very proud of having this in my portfolio. If you don’t have a
        project as awesome as this I would advise you make one.
      </div>
      <div
        style={{
          textAlign: "center",
          fontSize: 42,
          padding: 10,
          fontFamily: "Jost-Bold",
        }}
      >
        Experience
      </div>
      <div
        style={{
          borderTop: "3px dashed #bbb",
          textAlign: "center",
        }}
      ></div>
      <Experience />
      <Education />
      <LittleMore />
    </div>
  );
};
export default InformationCard;
