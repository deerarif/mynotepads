const express = require("express");
const Getdata = require("./route/route");
const app = express();
const body_parser = require("body-parser");
const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);
app.use(body_parser.json());
app.use("/", Getdata);
app.listen(8080, '0.0.0.0');