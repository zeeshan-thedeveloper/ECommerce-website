const mongoose = require("mongoose");
const Schema = new mongoose.Schema({
    password: {
            type: String,
            required: true,
          }, 
    email:{
            type: String,
            required: true,
          },  
    mobileNumber: {
        type: String,
        required: true,
    },
});

const CustomerSchema = mongoose.model("Customers", Schema);

module.exports = {CustomerSchema};