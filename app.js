
require("dotenv").config();

const Server = require("./models/server")
const server = new Server();


const main=async()=>{
    await server.conectarDB();
    server.listen();
}

main().catch(err=> console.log(err));
