import express from "express";
import { PORT } from "./config.js";
import caracteristicas from "./router/caracteristicas.routes.js"
//  import categorias from "./router/categorias.routes.js"
import productos from "./router/productos.routes.js"
// import usuarios from "./router/usuarios.routes.js"

import indexRoutes from "./router/index.routes.js"

const app = express()

app.use(indexRoutes)
app.use(express.json())
app.use(caracteristicas)
app.use(productos)



app.listen(PORT)
console.log(`Server listening on por ${PORT}`)