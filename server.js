const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const port = 3001;
app.use(bodyParser.urlencoded({ extended: false }));
/*app.get("/login", (req, res) => {
  const name = req.query.name || "";
  res.setHeader("content-Type", "application/json");
  res.send("hello");
});*/
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  next();
});
app.get("/", (req, res) => {
  res.send("Hello World!", req, req.body);
});
app.post("/login", (req, res) => {
  console.log("@@@##sonali", req, req.body);
  res.send("hello");
});

app.listen(port, () => {
  console.log(`server started ${port}`);
});
