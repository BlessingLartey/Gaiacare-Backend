const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  departmentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Department",
  },
  formField: {
    type: String,
    required: true,
  },
});

const Form = mongoose.model("Form", formSchema);

module.exports = Form;
