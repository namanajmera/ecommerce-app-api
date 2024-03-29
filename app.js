const express = require("express");

const app = express();

app.use("/", (req, res) => {
  res.send("Hello From E-Commerce App.");
});

const port = 5000;

app.listen(port, () => {
  console.log(`Server is running on ${"http://localhost:" + port}`);
});
