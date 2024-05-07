const Department = require("../models/Department");

// Function to add a Department
const addDepartment = async (req, res) => {
  try {
    const department = await Department.create(req.body);
    res.status(201).json(department);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Function to fetch all departments or a specific department by ID
const fetchDepartment = async (req, res) => {
  try {
    if (req.params.id) {
      const department = await Department.findById(req.params.id);
      res.json(department);
    } else {
      const departments = await Department.find();
      res.json(departments);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Function to update a Department by ID
const updateDepartment = async (req, res) => {
  try {
    const department = await Department.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.json(department);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Function to delete a department by ID
const deleteDepartment = async (req, res) => {
  try {
    await Department.findByIdAndDelete(req.params.id);
    res.json({ message: "Department deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addDepartment,
  fetchDepartment,
  updateDepartment,
  deleteDepartment,
};
