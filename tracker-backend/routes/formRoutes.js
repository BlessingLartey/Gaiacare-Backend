const express = require("express");
const formRouter = express.Router();
const formController = require("../controllers/formController");

// form routes
formRouter.post("/", formController.addForm);
formRouter.get("/", formController.fetchForm);
formRouter.get("/:id", formController.fetchForm);
formRouter.put("/:id", formController.updateForm);
formRouter.delete("/:id", formController.deleteForm);

module.exports = formRouter;
