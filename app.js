const express = require("express");
const userRouter = require("./backend/routes/userRoutes");
const productRouter = require("./backend/routes/productRouter");
const app = express();

app.use(express.json());

app.use("/api/v1/users", userRouter);
app.use("/api/v1/products", productRouter);
module.exports = app;
