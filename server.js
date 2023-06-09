require("dotenv").config();
const express = require("express");
const path = require("path");
const { handleCORS } = require("./utils/customMiddeware");
const favicon = require("serve-favicon");

const app = express();
app.use(
  "/static",
  express.static(path.join(__dirname, "client/build/static/"))
);

//app.use(favicon(__dirname + "/favicon.ico"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Handle CORS
app.use((req, res, next) => {
  handleCORS(req, res, next);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
