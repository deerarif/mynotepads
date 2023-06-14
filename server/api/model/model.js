var mongoose = require("mongoose");
var Schema = mongoose.Schema({
  title: String,
  note: String,
  createdAt: { type: Date, default: Date.now },
});
(async () => {
  try {
    await mongoose.connect("mongodb://mongodb:27017/notepads", () => {
      console.log("connected");
    });
  } catch (err) {
    console.log(err);
  }
})();
module.exports = mongoose.model("notes", Schema);
