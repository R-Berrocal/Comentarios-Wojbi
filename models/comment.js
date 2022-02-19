const {Schema, model}= require("dynamoose");
const {v4} = require('uuid');
const commentSchema=new Schema({
    id:{
        type: String,
        default: v4(),
    },
    description:{
        type:String,
        required: [true,"la descripcion es obligatoria"],
    },
    name:{
        type:String
    },
    email:{
        hashKey:[true,"el email ya existe"],
        type:String,
    }

})

module.exports=model("Comment",commentSchema);
