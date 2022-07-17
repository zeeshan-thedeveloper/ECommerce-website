const { SellersSchema } = require("../schemas/SellersSchema")
const { CUSTOMER_ACCOUNT_CREATED, SELLER_ACCOUNT_CREATED, COULD_NOT_CREATE_ACCOUNT, SELLER_ACCOUNT_LOGED_IN, COULD_NOT_LOGED_IN_CUSTOMER_ACCOUNT, CUSTOMER_ACCOUNT_LOGED_IN, COULD_NOT_LOGED_IN_SELLER_ACCOUNT } = require("./responseCode")

const signUp=(req,res) => {
   
    const {email,password,mobileNumber,accountType} = req.body
    if(accountType=="Customer"){
        // Create account in Customer schema
        CustomerSchema.create({email,mobileNumber,password},(error,data)=>{
            if(!error){
                res.status(200).send({
                    responseMessage:"Customer Account Created successfully",
                    responseCode:CUSTOMER_ACCOUNT_CREATED,
                    responsePayload:{data}
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
        SellersSchema.create({email,mobileNumber,password},(error,data)=>{
            if(!error){
                res.status(200).send({
                    responseMessage:"Seller Account Created successfully",
                    responseCode:SELLER_ACCOUNT_CREATED,
                    responsePayload:{data}
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
            res.status(200).send({
                responseMessage:"Customer Account Logged successfully",
                responseCode:CUSTOMER_ACCOUNT_LOGED_IN,
                responsePayload:{data}
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
                res.status(200).send({
                    responseMessage:"Seller Account Logged successfully",
                    responseCode:SELLER_ACCOUNT_LOGED_IN,
                    responsePayload:{data}
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