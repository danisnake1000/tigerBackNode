import express from "express";
import { PORT } from "./config.js";
import fileupload from "express-fileupload"
import caracteristicas from "./router/caracteristicas.routes.js"
//  import categorias from "./router/categorias.routes.js"
import productos from "./router/productos.routes.js"
 import usuarios from "./router/usuarios.routes.js"

import indexRoutes from "./router/index.routes.js"

const app = express()

app.use(fileupload({
    useTempFiles: true,
    tempFileDir:"./upload"
}))
app.use(indexRoutes)
app.use(express.json())
app.use(caracteristicas)
app.use(productos)
app.use(usuarios)

app.post('/files',(req,res)=>{
    res.json({message:"subiendo archivos"})
})

app.listen(PORT)
console.log(`Server listening on por `, PORT)