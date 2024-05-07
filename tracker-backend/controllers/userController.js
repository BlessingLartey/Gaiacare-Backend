const User = require("../models/User");

// add a user
const addUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// fetch all users or a specific user by ID
const fetchUser = async (req, res) => {
  try {
    if (req.params.id) {
      const user = await User.findById(req.params.id);
      res.json(user);
    } else {
      const users = await User.find();
      res.json(users);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//update a user by ID
const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// delete a user by ID
const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addUser, fetchUser, updateUser, deleteUser };
