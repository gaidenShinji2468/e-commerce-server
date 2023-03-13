const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./routes");
const whiteList = [
  "http://localhost:8080",
];
const options = {
  origin: (origin, callback) => {
    if(whiteList.includes(origin) || !origin) {
      callback(null, true);
    }else{
      callback(new Error("Not allowed"));
    }
  }
};

app.use(express.json());
app.use(cors(options));
router(app);
app.get("/", (req, res) => {
  res.send("Home page");
});

module.exports = app;
