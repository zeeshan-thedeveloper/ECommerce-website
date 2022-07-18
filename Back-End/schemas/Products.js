const mongoose = require("mongoose");
const Schema = new mongoose.Schema({
  itemName:{
    type:String,
    required:true
  },
  itemId:{
    type:String,
    required:true
  },
  itemPrice:{
    type:String,
    required:true
  },
  itemDescription:{
    type:String,
    required:true
  },
  itemImage:{
    type:String,
    required:true
  },
  itemSellerName:{
    type:String,
    required:true
  },
  itemSellerId:{
    type: mongoose.Schema.Types.ObjectId,
    required:true
  }
});

const ProductsListSchema = mongoose.model("Products", Schema);

module.exports = {ProductsListSchema};