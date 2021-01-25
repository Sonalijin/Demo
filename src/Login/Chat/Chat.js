import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "./chat.css";
import socketIoClient from "socket.io-client";

const socket = socketIoClient("http://localhost:5000", { autoConnect: false });

const Message = ({ msg }) => {
  return (
    <div className="msg">
      <span> {new Date(msg.date).toLocaleDateString()} </span>

      <span> {msg.content} </span>
    </div>
  );
};

const MessageBox = () => {
  const [value, setValue] = useState("");

  const postMessage = (e) => {
    e.preventDefault();

    if (!value) return;

    socket.emit("message", value);

    setValue("");
  };

  return (
    <div style={{ display: "flex", borderTop: "2px solid #D3D3D3" }}>
      <input
        type="text"
        //className="input"
        style={{
          border: "none",
          borderRadius: 0.5,
          //padding: 5,
          width: "900px",
          fontSize: "24px",
        }}
        placeholder="message"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div
        style={{
          display: "Flex",
          //width: "50%",
          //   padding: 1,
          //   marginLeft: 3,
          justifyContent: "flex-end",
        }}
      >
        <div
          onClick={postMessage}
          style={{
            color: "#fff",
            textTransform: "uppercase",
            textDecoration: "none",
            //flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            background: "#2979FF",
            borderRadius: "4px 4px 4px 4px",
            padding: 20,
            //marginTop: -11,
            display: "Flex",
            border: "none",
            width: "80px",
          }}
        >
          Send
        </div>
      </div>
    </div>
  );
};

const Chat = () => {
  const history = useHistory();
  const [messages, setMessages] = useState([]);

  const addMessage = (msg) => {
    setMessages((oldMessages) => [
      ...oldMessages,
      ...(Array.isArray(msg) ? msg.reverse() : [msg]),
    ]);
  };

  useEffect(() => {
    socket.on("latest", (data) => {
      // expect server to send us the latest messages
      addMessage(data);
    });
    socket.on("message", (msg) => {
      addMessage(msg);
    });

    socket.connect();
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#2979FF",
          borderRadius: "4px 4px 0 0",
          height: "60px",
          width: "99%",
          padding: 5,
          //marginBottom: -5,
        }}
      >
        <div
          style={{
            flex: 0.5,
            display: "flex",
            alignItems: "center",
            marginLeft: "5%",
            color: "white",
          }}
        >
          room
        </div>

        <div
          onClick={() => {
            history.push("/");
            socket.on("disconnect", function () {
              console.log("The client has disconnected!");
            });
          }}
          style={{
            display: "flex",
            flex: 0.5,
            justifyContent: "flex-end",
            marginRight: "5%",
          }}
        >
          X
        </div>
      </div>
      <div id="msgBox">
        {messages.map((msg, index) => (
          <Message msg={msg} />
        ))}
      </div>
      <MessageBox />
    </div>
  );
};

export default Chat;
