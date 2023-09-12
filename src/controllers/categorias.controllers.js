import { pool } from "../conexion.js";


const obtenerCategorias = async (req, res) => {
    const [result] =  await pool.query("SELECT * FROM categorias ORDER BY id")
    res.json(result)()
}
const obtenerCategoriasId = async (req, res) => {
    const [result] =  await pool.query("SELECT * FROM categorias WHERE id = ?",[req.params.id] )
    res.json(result[0])
}

const crearCategorias = async (req, res) => {
     const { titulo,descripcion,urlimagen } = req.body
     const [result] = await pool.query("INSERT INTO categorias (titulo,descripcion,urlimagen ) VALUE (?, ?, ?)",[titulo,descripcion,urlimagen])
     res.send({
        id : result.insertId,
        titulo,
        descripcion,
        urlimagen
     })

}
