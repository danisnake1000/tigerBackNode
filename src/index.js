import express from "express";
import caracteristicas from "./router/router.caracteristicas.js"
import indexRoutes from "./router/router.index.js"

const app = express()
app.use(indexRoutes)
app.use(express.json())
app.use(caracteristicas)


app.listen(4000)
console.log("connecting port 4000");