const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = require("./app");

app.use(express.static(path.join(__dirname, "./dist/final-project")));

const DB =
  // "mongodb+srv://pradeepraja:95666@trainingcluster.b8jho.mongodb.net/operationProduct?retryWrites=true&w=majority";
  "mongodb+srv://k12345:Yeu2jCYK3DbPSRVi@cluster0.k3hqj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(DB).then(() => {
  console.log("connected");
});

const port = 4000;
app.listen(port, () => {
  console.log(`app listening on http://localhost:${port}......`);
});
