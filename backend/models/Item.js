const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
  auth_name: {
    first: String,
    last: String,
  },
  title: String,
  desc: String,
  image_url: String,
  data: Date,
});

module.exports = mongoose.model("News", newsSchema);
