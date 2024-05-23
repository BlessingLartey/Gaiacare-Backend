const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
  userId: {
    type: Number,
    ref: "User",
  },
  userName: {
    type: String,
    ref: "User",
  },
  department: {
    type: String,
    ref: "User",
  },

  totalPercentageAchieved: {
    type: Number,
    required: true,
  },
});

const Result = mongoose.model("Result", resultSchema);

module.exports = Result;
