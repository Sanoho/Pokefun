require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 5555;
app.use(express.json());

app.get("/user/:id", (req, res) => {
  const { id } = req.params;
  res.status(200).send("You want id: " + id + "?");
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
