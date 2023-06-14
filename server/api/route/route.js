const express = require("express");
const data = require("../model/model");
const route = express.Router();

route.get("/get", async (req, res) => {
  try {
    const getdata = await data.find();
    res.json(getdata);
  } catch (err) {
    res.json({ messages: err });
  }
});
route.get("/", async (req, res) => {
  res.send("this page porbiden for not autorizaion user")
});
route.post("/post", async (req, res) => {
  const tampung = new data({
    title: req.body.title,
    note: req.body.note,
  });
  try {
    const post = await tampung.save();
    res.json({
      status: true,
    });
  } catch (err) {
    res.json({
      status: false,
    });
    // res.json({messages : err}); //this will output all error (security issue)
    console.log(err);
  }
});
route.delete("/delete/:postid", async (req, res) => {
  try {
    const getdata = await data.deleteOne({
      _id: req.params.postid,
    });
    res.json({
      status: true,
    });
  } catch (err) {
    res.json({
      status: false,
    });
    // res.json({messages : err}); //this will output all error (security issue)
    console.log(err);
  }
});

module.exports = route;
