const mongoose = require("mongoose");
mongoose.connect(
  `mongodb://localhost:27017/z-get`, 
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
  } 
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully to local db");
});

module.exports=db;