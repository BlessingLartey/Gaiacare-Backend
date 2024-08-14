const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoute = require("./routes/userRoutes");
const departmentRoute = require("./routes/departmentRoutes");
const formRoute = require("./routes/formRoutes");
const resultRoute = require("./routes/resultRoutes");

const app = express();
const PORT = process.env.PORT;

//MongoDB connect
mongoose
  .connect("mongodb://localhost:27017/gaiacare")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/user", userRoute);
app.use("/api/department", departmentRoute);
app.use("/api/form", formRoute);
app.use("/api/result", resultRoute);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
