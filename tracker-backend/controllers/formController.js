const Form = require("../models/Form");

// add a form
const addForm = async (req, res) => {
  try {
    const form = await Form.create(req.body);
    res.status(201).json(form);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// fetch all forms or a specific form by ID
const fetchForm = async (req, res) => {
  try {
    if (req.params.id) {
      const form = await Form.findById(req.params.id);
      res.json(form);
    } else {
      const forms = await Form.find();
      res.json(forms);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//update a form by ID
const updateForm = async (req, res) => {
  try {
    const form = await Form.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(form);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// delete a form by ID
const deleteForm = async (req, res) => {
  try {
    await Form.findByIdAndDelete(req.params.id);
    res.json({ message: "Form deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addForm, fetchForm, updateForm, deleteForm };
