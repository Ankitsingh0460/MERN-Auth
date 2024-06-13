const express = require("express");
const dotenv = require("dotenv");
const app = express();
const cookieParser = require("cookie-parser");
dotenv.config();
const Port = process.env.Port || 8000;
const userRoute = require("./routes/userRoute");
const mongoose = require("mongoose");
const URL = process.env.URL;
const cors = require("cors");

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
mongoose
  .connect(URL)
  .then(() => console.log("mongodb is connected"))
  .catch((err) => console.log("error", err));
app.use("/api/user", userRoute);
app.listen(Port, () => {
  console.log(`Server started ${Port}`);
});
