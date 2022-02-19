const { request, response } = require("express");
const Comment= require("../models/comment");


const obtenerComments=async(req=request,res=response)=>{
    const {limit=10,desde=0}=req.query;

    // const total=await Comment.scan({"email":desde}).attributes().exec();
    const resultados=await Comment.scan().limit(Number(limit)).exec();
    const total=resultados.count;
    // if(total){
    //     return res.json({msg: "ya existe un usuario con este"})
    // }
    res.json({
        total,
        resultados
    })
}

const crearComment= async(req=request, res=response)=>{

    const {id, ...resto}=req.body;
    
    const comment =new Comment(resto);
    await comment.save();

    return res.status(201).json({
        comment
    })


}

module.exports={
    crearComment,
    obtenerComments
}