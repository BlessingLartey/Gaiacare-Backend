const Result = require("../models/Result");

// add a result
const addResult = async (req, res) => {
  try {
    const result = await Result.create(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// fetch all results or a specific result by ID
const fetchResult = async (req, res) => {
  try {
    if (req.params.id) {
      const result = await Result.findById(req.params.id);
      res.json(result);
    } else {
      const results = await Result.find();
      res.json(results);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//update a result by ID
const updateResult = async (req, res) => {
  try {
    const result = await Result.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// delete a result by ID
const deleteResult = async (req, res) => {
  try {
    await Result.findByIdAndDelete(req.params.id);
    res.json({ message: "Result deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addResult, fetchResult, updateResult, deleteResult };
