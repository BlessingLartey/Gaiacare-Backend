const express = require("express");
const resultRouter = express.Router();
const resultController = require("../controllers/resultController");

// result routes
resultRouter.post("/", resultController.addResult);
resultRouter.get("/", resultController.fetchResult);
resultRouter.get("/:id", resultController.fetchResult);
resultRouter.put("/:id", resultController.updateResult);
resultRouter.delete("/:id", resultController.deleteResult);

module.exports = resultRouter;
