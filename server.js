const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "Hii! This is me!" });
});

app.listen(3001, "0.0.0.0", () => {
  console.log("Server running on port 3001");
});