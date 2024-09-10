const express = require("express");
const connectDB = require("./config/db");
const guestRoutes = require("./routes/guestRoutes");
const securityRoutes = require("./routes/securityRoutes")
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3001;

// Connect to MongoDB
connectDB();

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use("/api", guestRoutes); // localhost:3002/api/
app.use("/api/security",securityRoutes);//localhost:3002/api
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

