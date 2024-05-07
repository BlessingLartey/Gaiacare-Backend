const express = require("express");
const departmentRouter = express.Router();
const departmentController = require("../controllers/departmentController");

// Department routes
departmentRouter.post("/", departmentController.addDepartment);
departmentRouter.get("/", departmentController.fetchDepartment);
departmentRouter.get("/:id", departmentController.fetchDepartment);
departmentRouter.put("/:id", departmentController.updateDepartment);
departmentRouter.delete("/:id", departmentController.deleteDepartment);

module.exports = departmentRouter;
