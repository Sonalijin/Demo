const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
//const chat = require("./app/chat/index");
const routesUrl = require("./app/routes/SignUpRoutes");
//const db = require("./chat/db/db.js");
const Message = require("./app/chat/models/message.js");
const app = express();
const cors = require("cors");
const frontUrl = "http://localhost:3000";
// const dbUrl =
//   "mongodb+srv://Chat-App:Chat-App@cluster0.rbfdm.mongodb.net/Message?retryWrites=true&w=majority";
// db.connect(dbUrl);
dotenv.config();
mongoose.connect(
  process.env.DATABASE_ACCESS,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("database connected")
);

app.use(express.json());
app.use(
  cors({ origin: frontUrl, optionsSuccessStatus: 200, credentials: true })
);

app.use("/app", routesUrl);

const server = app.listen(5000, () => `port is set up and runing`);
const startSocket = () => {
  const socket = require("socket.io")(server);
  socket.on("connection", async (client) => {
    console.log("client connected...");

    client.on("message", async (msg) => {
      let message = await Message.Schema.statics.create(msg);
      socket.emit("message", message);
    });

    let latest = await Message.Schema.statics.latest(10);
    client.emit("latest", latest);
  });
};
startSocket();
