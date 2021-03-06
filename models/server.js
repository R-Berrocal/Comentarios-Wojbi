const express = require("express")
const cors = require("cors");
const { dbConnection } = require("../database/config");

class Server{
    constructor(){
        this.app= express();
        this.port=process.env.PORT || 8080;
        this.path={
            comment: "/api/comments"
        }
        //middlewares
        this.midlewares();

        //rutas de mi aplicacion
        this.routes();

    }
    async conectarDB(){
        await dbConnection();
    }
    midlewares(){
        //cors
        this.app.use(cors());

        //lectura y parseo del body
        this.app.use(express.json());

        //directorio publico
        this.app.use(express.static("public"));
    }

    routes(){
        this.app.use(this.path.comment,require("../routes/comment"));
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`escuchando en el puerto ${this.port}`);
        })
    }


}

module.exports= Server;