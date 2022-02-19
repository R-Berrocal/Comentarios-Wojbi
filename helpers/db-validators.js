const Comment= require("../models/comment");

const emailExiste= async(email="")=>{
    const emailExiste= await Comment.scan({"email":email}).exec();
    
    if(Array.isArray(emailExiste)&&emailExiste.length>0){
        throw new Error(`El email: ${email}, ya existe en la DB `)
    }
}
module.exports={
    emailExiste
}