const express=require('express')
const authController=require('../controler/authController')
const sellerController=require('../controler/sellerController')
const authMiddleware = require('../middleware/authMiddleware')
const routes=express()

routes.post("/signUp",authController.signUp);
routes.post("/signIn",authController.signIn);

routes.post("/addProduct",authMiddleware.verifyJwtToken,sellerController.addProduct);
routes.post("/removeProduct",sellerController.removeProduct);
routes.post("/updateProduct",sellerController.updateProduct);
routes.post("/getAllProducts",sellerController.getAllProducts);

module.exports = routes;
