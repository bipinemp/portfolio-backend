const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const mongoDB = require("./connection/db");

const PORT = process.env.PORT || 5000;

// Express
const app = express();

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5000", "https://bipinbhandari.onrender.com/"],
  })
);

// Connection to MongoDB Database
mongoDB();

// Routes
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log("* API is Running on http://localhost:" + PORT + "*");
});
