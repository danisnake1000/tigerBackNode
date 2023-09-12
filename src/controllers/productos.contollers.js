import { pool } from "../conexion.js";

export const obtenerProductos = async (req, res) => {
  const [result] = await pool.query("SELECT * FROM productos ORDER BY id  ");
  res.json(result);
};

export const obtenerProductoId = async (req, res) => {
  const [result] = await pool.query("SELECT * FROM productos WHERE id = ?", [
    req.params.id,
  ]);
  if (result.length <= 0)
    return res.status(404).json({ message: "Producto no encontrado" });
  res.json(result[0]);
};

export const agregarProducto = async (req, res) => {
  const { nombre, descripcion, deporte, genero } = req.body;
  const [result] = await pool.query(
    "INSERT INTO productos(nombre, descripcion,deporte,genero) VALUES (?,?,?,?)",
    [nombre, descripcion, deporte, genero]
  );
  res.send({
    id: result.insertId,
    nombre,
    descripcion,
    deporte,
    genero,
  });
};

export const actualizarProducto = async (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion, deporte, genero } = req.body;
  const [result] = await pool.query(
    "UPDATE productos SET nombre = IFNULL(?,nombre), descripcion = IFNULL(?,descripcion), deporte = IFNULL(?,deporte), genero = IFNULL(?,genero) WHERE id = ?",
    [nombre, descripcion, deporte, genero,id]
  );
  if(result.affectedRows ===0){
    return res.status(404).json({message: "Producto no actualizado"})
  }
  const [productoActualizado] = await pool.query("SELECT * FROM productos WHERE id = ?", [id])
  res.json(productoActualizado);
 
};



export const borrarProducto = async (req, res) => {
  const [result] = await pool.query("DELETE FROM productos WHERE id = ?", [
    req.params.id,
  ]);
  if (result.affectedRows <= 0) {
    return res.status(404).json({ message: "Producto no encontrado" });
  }
  res.send(result)
};
