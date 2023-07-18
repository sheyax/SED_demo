const express = require("express");
const bodyParser = require("body-parser");
require("./db");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var reg = require("./controllers/registration");

let port = 5000;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});
app.use("/reg", reg);
