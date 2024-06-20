const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT || 5000;
const uri = process.env.MONGODB_URI;

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

const reportSchema = new mongoose.Schema({
  vin: String,
  name: String,
  email: String,
  phoneNumber: String,
  status: { type: String, default: "incomplete" },
  completed: { type: Boolean, default: false },
  dateTime: { type: Date, default: Date.now },
});

const Report = mongoose.model("Report", reportSchema);

// Define routes here

// POST a new report
app.post("/api/reports", async (req, res) => {
  try {
    const reportData = {
      ...req.body,
      status: "incomplete",
      completed: false,
      dateTime: new Date(), // Automatically add current date and time
    };
    const report = new Report(reportData);
    await report.save();
    res.status(201).send(report);
  } catch (error) {
    res.status(400).send(error);
  }
});

// GET all reports
app.get("/api/reports", async (req, res) => {
  try {
    const reports = await Report.find();
    res.json(reports);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// Update completion status of a report
app.put("/api/reports/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { completed, status } = req.body;

    // Update completion status and status in MongoDB
    const updatedReport = await Report.findByIdAndUpdate(
      id,
      { completed, status },
      { new: true }
    );

    if (!updatedReport) {
      return res.status(404).json({ message: "Report not found" });
    }

    res.json(updatedReport);
  } catch (error) {
    console.error("Error updating report:", error);
    res
      .status(500)
      .json({ message: "Error updating report. Please try again later." });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
