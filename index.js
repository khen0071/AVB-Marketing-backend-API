const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const connectDB = require("./config/db");
const commentRoute = require("./routes/commentRoute.js");

connectDB();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "*",
  })
);

//Parse body
app.use(express.json());
//Allow to send form data
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("ABVMarketing API running");
});

app.use("/api/comments", commentRoute);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
