const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const Contact = require("./models/Contact");

const app = express();

app.use(cors({
  origin: "https://vijayadass-portfolio.netlify.app/",
  methods: ["GET", "POST", "OPTIONS"],
  credentials: true,
}));

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Backend Running ✅");
});

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const newContact = new Contact({ name, email, message });
    const savedContact = await newContact.save();

    console.log("Contact saved successfully ✅");
    console.log(savedContact);

    res.status(201).json({
      success: true,
      message: "Message received successfully",
    });
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});