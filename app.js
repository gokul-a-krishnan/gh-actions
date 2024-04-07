// Import required modules
const express = require("express");

console.log("LOG::", process.env.APP_SECRET);
// Create an Express application
const app = express();

// Define a route
app.get("/", (req, res) => {
  res.send("Hello, World! This is a simple Express app.");
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
