const addProduct=(req,res)=>{
    res.status(200).send({
        response:"Adding products"
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
    res.status(200).send({
        response:"get all products"
    })
}

module.exports ={
    addProduct,updateProduct,getAllProducts,removeProduct
}