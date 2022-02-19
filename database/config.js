const dynamoose=require("dynamoose");

const dbConnection = async()=>{
    try {
        await dynamoose.aws.sdk.config.update({
            region:'us-east-1',
            accessKeyId:process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey:process.env.AWS_SECRET_ACCESS_KEY,
          })
          console.log("base de datos online");
    } catch (error) {
        console.log(error);
        throw new Error("Error a la hora de iniciar la base de datos")
    }

}

module.exports={
    dbConnection
}