const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
  userId: {
    type: Number,
    ref: "User",
  },
  formFieldDetails: {
    type: String,
    required: true,
  },
});

const Result = mongoose.model("Result", resultSchema);

module.exports = Result;
