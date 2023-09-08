import express from "express";
import caracteristicas from "./router/router.caracteristicas.js"
import {pool} from "./conexion.js"

const app = express()
app.use(caracteristicas)


app.listen(4000)
console.log("connecting port 4000");