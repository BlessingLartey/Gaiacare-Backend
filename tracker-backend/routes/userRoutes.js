const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/userController");

// User routes
userRouter.post("/", userController.addUser);
userRouter.get("/", userController.fetchUser);
userRouter.get("/:id", userController.fetchUser);
userRouter.put("/:id", userController.updateUser);
userRouter.delete("/:id", userController.deleteUser);

module.exports = userRouter;
