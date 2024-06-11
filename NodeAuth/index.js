const express = require("express");
const dotenv = require("dotenv");
const app = express();
dotenv.config();
const Port = process.env.Port || 8000;
const userRoute = require("./routes/userRoute");
const mongoose = require("mongoose");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
mongoose
  .connect("mongodb://127.0.0.1:27017/mernAuth")
  .then(() => console.log("mongodb is connected"))
  .catch((err) => console.log("error", err));
app.use("/user", userRoute);
app.listen(Port, () => {
  console.log(`Server started ${Port}`);
});
