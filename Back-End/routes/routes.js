const express=require('express')
const authController=require('../controler/authController')
const sellerController=require('../controler/sellerController')
const authMiddleware = require('../middleware/authMiddleware')
const routes=express()

routes.post("/signUp",authController.signUp);
routes.post("/signIn",authController.signIn);

routes.post("/addProduct",authMiddleware.verifyJwtToken,sellerController.addProduct);
routes.post("/removeProduct",authMiddleware.verifyJwtToken,sellerController.removeProduct);
routes.post("/updateProduct",authMiddleware.verifyJwtToken,sellerController.updateProduct);
routes.post("/getAllProducts",authMiddleware.verifyJwtToken,sellerController.getAllProducts);

module.exports = routes;
