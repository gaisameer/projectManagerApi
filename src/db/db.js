const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/projectManager", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

console.log("database created");
