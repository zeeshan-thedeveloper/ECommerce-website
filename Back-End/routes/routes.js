const express=require('express')
const authController=require('../controler/authController')
const sellerController=require('../controler/sellerController')
const routes=express()

routes.post("/signUp",authController.signUp);
routes.post("/signIn",authController.signIn);

routes.get("/addProduct",sellerController.addProduct);
routes.get("/removeProduct",sellerController.removeProduct);
routes.get("/updateProduct",sellerController.updateProduct);
routes.get("/getAllProducts",sellerController.getAllProducts);

module.exports = routes;
