const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const createError = require("http-errors");
const PORT = process.env.PORT;
const apiRouter = require("./app/routes/api.routes");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api", apiRouter);
app.use((req, res, next) => {
  next(createError.NotFound());
});
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    status: err.status || 500,
    message: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`server is running at PORT ${PORT}`);
});
