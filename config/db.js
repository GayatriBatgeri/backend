// db.js
const baseurl = process.env.DB_NAME;
const mongoose = require("mongoose");
mongoose.connect(`mongodb://127.0.0.1:27017/${baseurl}`);
const connectDB = () => {
  console.log("MongoDb connected !!");
};

module.exports = connectDB;
