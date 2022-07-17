const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

const verifyJwtToken=(req,res,next) => {
    dotenv.config(); 
    const jwtToken = req.headers['authorization'].split(' ')[1];
    let jwtSecretKey = process.env.SECRET_KEY;
    try{
        const verified = jwt.verify(jwtToken, jwtSecretKey);
    if(verified){
        next();
    }else{
        // Access Denied
        return res.status(401).send({responseMessage: "Access Denied"});
    }   
    }catch(e){
        return res.status(501).send({responseMessage: e.message});
    }
}

module.exports ={
    verifyJwtToken
}