var uuid = require('uuid');
const { ProductsListSchema } = require('../schemas/Products');
const { OPERATION_SUCCESSFUL, OPERATION_NOT_SUCCESSFUL } = require('./responseCode');
const addProduct=(req,res)=>{
  
    const {
        itemName,
        itemPrice,
        itemDescription,
        itemImage,
        itemSellerName,
        itemSellerId
    } = req.body;
    const itemId = uuid.v1();
    ProductsListSchema.create({
        itemName,
        itemPrice,
        itemDescription,
        itemImage,
        itemSellerName,
        itemId,
        itemSellerId:itemSellerId
    },(error,data)=>{
        if(!error){
            res.status(200).send({
                responseMessage:"Item Added",
                responseCode:OPERATION_SUCCESSFUL,
                responsePayload:data
            })
        }else{
            res.status(200).send({
                responseMessage:"Could not add the item",
                responseCode:OPERATION_NOT_SUCCESSFUL,
                responsePayload:error
            })
        }
    })   
}

const removeProduct=(req,res)=>{
    res.status(200).send({
        response:"removing products"
    })
}

const updateProduct=(req,res)=>{
    res.status(200).send({
        response:"Updating products"
    })
}

const getAllProducts=(req,res)=>{
    const {itemSellerId} = req.body 
    ProductsListSchema.find({itemSellerId:itemSellerId},(err,data)=>{
        console.log(data)
        if(!err){
            res.status(200).send({
                responseMessage:"Loaded Data",
                responseCode:OPERATION_SUCCESSFUL,
                responsePayload:data
            })
        }else{
            res.status(200).send({
                responseMessage:"Could not load Data",
                responseCode:OPERATION_NOT_SUCCESSFUL,
                responsePayload:err
            })
        }
    })
   
}

module.exports ={
    addProduct,updateProduct,getAllProducts,removeProduct
}