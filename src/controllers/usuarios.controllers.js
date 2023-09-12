import { pool } from "../conexion.js";

const obternerUsuarios = async(req,res)=>{
    const [result] = await pool.query("SELECT * FROM  usuarios ORDER BY id")
    res.json(result);
}
const obternerUsuariosId = async(req,res)=>{
    const [result] = await pool.query("SELECT * FROM  usuarios WHERE id = ?",[req.params.id])
    res.json(result[0]);
}
const crearUsuarios = async(req,res)=>{
    const { nombre,nombreDeUsuario,email,apellido }=req.body
    const [result] = await pool.query("INSERT INTO usuarios(nombre,nombreDeUsuario,email,apellido) WHERE = ?,?,?,?",[nombre,nombreDeUsuario,email,apellido])
    res.send({
        id : result.insertId,
        nombre,
        nombreDeUsuario,
        email,
        apellido

    })
}