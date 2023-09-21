import express from "express";
import { PORT ,} from "./config.js";
import fileupload from "express-fileupload"
import {dowloadFile, getFile, getFileUrl, getFiles, uploadFile} from "../s3.js"
//  import categorias from "./router/categorias.routes.js"
import productos from "./router/productos.routes.js"
import usuarios from "./router/usuarios.routes.js"
// import indexRoutes from "./router/index.routes.js"
import caracteristicas from "./router/caracteristicas.routes.js"
import "./config.js"

const app = express()

app.use(fileupload({
    useTempFiles: true,
    tempFileDir:"./upload"
}))
// app.use(indexRoutes)
app.use(express.json())
app.use(caracteristicas)
app.use(productos)
app.use(usuarios)

app.get('/file',async(req,res)=>{
    const result = await getFiles()
    res.json(result.Contents)
})

app.get('/file/:fileName',async(req,res)=>{
     const result = await getFileUrl(req.params.fileName)
    res.json({
        url:result
    })
})

app.get('/download/:fileName',async(req,res)=>{
    await dowloadFile(req.params.fileName)
    res.json({mensaje:"archivo descargado"})
})

app.post('/file',async(req,res)=>{
    const result = await uploadFile(req.files.file);
    res.json({result})
})


app.use(express.static("images"))

app.listen(PORT)
console.log(`Server listening on por `, PORT)