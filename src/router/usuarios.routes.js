import { Router } from "express";
import {obtenerUsuarios,
  crearUsuarios,
  obternerUsuariosId,
  borrarUsuario
  
} from "../controllers/usuarios.controllers.js";


const router =  Router();

router.post("/usuarios",crearUsuarios)

router.get("/usuarios",obtenerUsuarios)

router.get("/usuarios/:id",obternerUsuariosId)

router.delete("/usuarios/:id",borrarUsuario)



export default router