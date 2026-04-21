const express = require("express");
const app = express();
const os = require('os');

app.get('/api', (req, res) => {
  res.json({
    message: "Hii! This is me!",
    server: os.hostname()
  });
});
app.listen(3001, "0.0.0.0", () => {
  console.log("Server running on port 3001");
});