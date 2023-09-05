import express from 'express';
import {pool} from "./conexion.js"

const app = express()

app.get("/caracteristicas",async (req, res) => {
    const respuesta = await pool.query()
})
