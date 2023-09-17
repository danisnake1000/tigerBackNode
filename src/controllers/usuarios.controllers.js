import { pool } from "../conexion.js";

export const obtenerUsuarios = async(req,res)=>{
    const [result] = await pool.query("SELECT * FROM  usuarios ORDER BY id")
    res.json(result);
}
export const obternerUsuariosId = async(req,res)=>{
    const [result] = await pool.query("SELECT * FROM  usuarios WHERE id = ?",[req.params.id])
    if (result.length <= 0)
    return res.status(404).json({ message: "Usuario no encontrado" });
    res.json(result[0]);
}
export const crearUsuarios = async(req,res)=>{
   try {
    const { nombre,nombreDeUsuario,email,apellido }=req.body
    const [result] = await pool.query("INSERT INTO usuarios(nombre,nombreDeUsuario,email,apellido) VALUES  (?,?,?,?)",[nombre,nombreDeUsuario,email,apellido])
    res.send({
        id : result.insertId,
        nombre,
        nombreDeUsuario,
        email,
        apellido

    })
    
   } catch (error) {
    return res.status(500).json({
        messege:"se ha producido un error"
    })
   }
}

export const borrarUsuario = async (req, res) => {
    const [result] = await pool.query("DELETE  FROM usuarios WHERE id = ?",[req.params.id])
    if(result.affectedRows <= 0) {
        return res.status(404).json({message: "No se borro usuario"})
    }
    res.send(result)
}