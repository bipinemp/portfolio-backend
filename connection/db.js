require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  const res = await mongoose.connect(process.env.MONGO);
  if (res) {
    console.log("--- connected to db Sucessfully ---");
  } else {
    console.log("connection to db failed !!!");
  }
};

module.exports = connectDB;
