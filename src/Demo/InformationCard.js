import React from "react";

const InformationCard = () => {
  const Img = () => {
    return (
      <div
        style={{
          overflow: "auto",
          borderRadius: "50%",
          roundedcolor: "#eee",
          padding: 10,
        }}
      >
        <img src="../soni.jpg" alt="soni" height="150px" width="100px" />
      </div>
    );
  };
  const LittleMore = () => {
    return (
      <div>
        {" "}
        <div
          style={{
            textAlign: "center",
            fontSize: 42,
            padding: 10,
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
            fontsize: 20,
            padding: 10,
            fontWeight: 500,
            fontFamily: "roboto",
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
              padding: 10,
              flexBasis: "77%",
            }}
          >
            <div
              style={{
                fontSize: 42,
                paddingTop: 5,
                fontWeight: "bold",
              }}
            >
              GLA University
            </div>
            <div
              style={{
                fontSize: 20,
                paddingTop: 5,
                fontWeight: 500,
              }}
            >
              Bachelor of Technology
            </div>
            <div
              style={{
                fontSize: 20,
                paddingTop: 5,
                fontWeight: 400,
              }}
            >
              2015 - 2019
            </div>
          </div>
          <div
            style={{
              fontSize: 20,
              padding: 10,
              fontWeight: 400,

              fontFamily: "roboto",
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
          //padding: 10,
          //margin: 10,
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
            flexBasis: "70%",
          }}
        >
          <div
            style={{
              fontSize: 36,
              fontFamily: "roboto",
              fontWeight: 500,
              //flex: 2,
            }}
          >
            NIIT LTD
          </div>
          <div
            style={{ fontSize: 18, fontFamily: "roboto", fontStyle: "italic" }}
          >
            www.niit.com
          </div>
          <div
            style={{
              fontSize: 20,
              fontFamily: "roboto",
              fontWeight: 500,
              paddingTop: 5,
            }}
          >
            Associate Software Engineer
          </div>
          <div style={{ fontSize: 20, fontFamily: "roboto" }}>
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
              fontFamily: "roboto",
              paddingTop: 10,
              //paddingLeft: 140,
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
        }}
      >
        <Img />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div>
            An enthusiastic highly motivated and leadership
            quality, a bachelor's degree in Computer Science Engineering. Eager
            to learn new technologies and methodologies.
          </div>
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
          fontSize: 42,
          padding: 10,
        }}
      >
        Project
      </div>
      <div
        style={{
          borderTop: "3px dashed #bbb",
          textAlign: "center",
          // transform: "translate(0px, -220px) rotate(0deg)",
        }}
      ></div>
      <div
        style={{
          textAlign: "center",
          fontSize: 28,
          fontFamily: "roboto",
          fontWeight: "bold",
          padding: 10,
        }}
      >
        Super awesome project
      </div>
      <div
        style={{
          textAlign: "center",
          fontSize: 18,
          fontFamily: "roboto",
          fontWeight: 400,
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
          fontFamily: "roboto",
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
