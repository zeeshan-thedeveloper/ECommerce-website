const { SellersSchema } = require("../schemas/SellersSchema")
const { CUSTOMER_ACCOUNT_CREATED, SELLER_ACCOUNT_CREATED, COULD_NOT_CREATE_ACCOUNT, SELLER_ACCOUNT_LOGED_IN, COULD_NOT_LOGED_IN_CUSTOMER_ACCOUNT, CUSTOMER_ACCOUNT_LOGED_IN, COULD_NOT_LOGED_IN_SELLER_ACCOUNT } = require("./responseCode")
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');


const jwtTokenGenerator=(value)=>{
    dotenv.config(); 
    const data={
        email:value.email
    }
    let jwtSecretKey = process.env.SECRET_KEY;
    return jwt.sign(data, jwtSecretKey,{expiresIn: "1h"}); 
}

const signUp=(req,res) => {
   
    const {email,firstName,password,mobileNumber,accountType} = req.body 

    if(accountType=="Customer"){
        // Create account in Customer schema
        CustomerSchema.create({email,mobileNumber,password,firstName},(error,data)=>{ 
            if(!error){ 
                const jwtToken = jwtTokenGenerator(email);
                console.log("Generated token",jwtToken);
                res.status(200).send({
                    responseMessage:"Customer Account Created successfully",
                    responseCode:CUSTOMER_ACCOUNT_CREATED,
                    responsePayload:{firstName:data.firstName,email:data.email,_id:data._id,jwtToken:jwtToken}
                })
            } 

            else{
                res.status(200).send({
                    responseMessage:"Error while creating record",
                    responseCode:COULD_NOT_CREATE_ACCOUNT,
                    responsePayload:error
                })
            } 
        })
    }else if(accountType=="Seller"){
        // Create account in seller schema
        SellersSchema.create({email,firstName,mobileNumber,password},(error,data)=>{
            if(!error){
                const jwtToken = jwtTokenGenerator(email);
                console.log("Generated token",jwtToken); 
                res.status(200).send({
                    responseMessage:"Seller Account Created successfully",
                    responseCode:SELLER_ACCOUNT_CREATED,
                    responsePayload:{firstName:data.firstName,email:data.email,_id:data._id,jwtToken:jwtToken}
                })
            } 

            else{
                res.status(200).send({
                    responseMessage:"Error while creating record",
                    responseCode:COULD_NOT_CREATE_ACCOUNT,
                    responsePayload:error
                })
            } 
        })
    }
   
}

const signIn=(req,res) => {
   
    const {email,password,accountType} = req.body
    if(accountType=="Customer"){
        // login account in Customer schema
       // login account in seller schema
       CustomerSchema.findOne({email:email,password:password},(error,data)=>{
        console.log("Data of logged in user",data)
        if(data){
            const jwtToken = jwtTokenGenerator(email);
            console.log("Generated token",jwtToken);
            res.status(200).send({
                responseMessage:"Customer Account Logged successfully",
                responseCode:CUSTOMER_ACCOUNT_LOGED_IN,
                responsePayload:{firstName:data.firstName,email:data.email,_id:data._id,jwtToken:jwtToken}
            })
        }
        else{
            res.status(200).send({
                responseMessage:"Error while logging-in",
                responseCode:COULD_NOT_LOGED_IN_CUSTOMER_ACCOUNT,
                responsePayload:data
            })
        } 
    })
    }else if(accountType=="Seller"){
        // login account in seller schema
        SellersSchema.findOne({email:email,password:password},(error,data)=>{
            console.log("Data of logged in user",data)
            if(data){
                const jwtToken = jwtTokenGenerator(email);
                console.log("Generated token",jwtToken);
                res.status(200).send({
                    responseMessage:"Seller Account Logged successfully",
                    responseCode:SELLER_ACCOUNT_LOGED_IN,
                    responsePayload:{firstName:data.firstName,email:data.email,_id:data._id,jwtToken:jwtToken}
                })
            }
            else{
                res.status(200).send({
                    responseMessage:"Error while logging-in",
                    responseCode:COULD_NOT_LOGED_IN_SELLER_ACCOUNT,
                    responsePayload:data
                })
            } 
        })
    }
   
}



module.exports ={
    signUp,signIn
}