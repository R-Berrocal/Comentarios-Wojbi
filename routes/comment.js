const {Router}= require("express");
const { check } = require("express-validator");
const { crearComment, obtenerComments } = require("../controllers/comment");
const { emailExiste } = require("../helpers/db-validators");
const { validarCampos } = require("../middlewares/validar-campos");

const router = Router();

router.get("/",obtenerComments)

router.post("/",[
    check("description","la descripcion es obligatoria").not().isEmpty(),
    check("email").custom(emailExiste),
    validarCampos
],crearComment);

module.exports=router;