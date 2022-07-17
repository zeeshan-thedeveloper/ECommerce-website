const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const Schema = new mongoose.Schema({
  firstName:{
    type: String,
    required: true,
  },
    password: { 
            type: String,
            required: true,
          }, 
    email:{
            type: String,
            required: true,
            unique: true 
          },   
    mobileNumber: {
        type: String,
        required: true,
    },
});
Schema.plugin(uniqueValidator); 
const SellersSchema = mongoose.model("Sellers", Schema);

module.exports = {SellersSchema};