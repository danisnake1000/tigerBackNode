import { pool } from "../conexion.js";
// const app = express()
export const getCaracteristicas = async (req, res) => {
  const [resp] = await pool.query("SELECT * FROM caracteristicas ORDER BY id");
  res.json(resp);
};

export const getIdCaracteristicas = async (req, res) => {
  const [resp] = await pool.query("SELECT * FROM caracteristicas WHERE id = ?",
    [res.param.id]
  );
  res.json(resp[0]);
};

export const postCaracteristicas = async (req, res) => {
  const { icono, descripcion } = req.body;
  const [resp] = await pool.query("INSERT INTO caracteristicas(icono,descripcion) VALUES(?,?)",
    [icono, descripcion]
  );
  res.send({
    id: resp.insertId,
    icono,
    descripcion,
  });
};

export const updateCaracteristicas = async (req, res) => {
  const respuesta = await pool.query();
};

export const deleteCaracteristicas = async (req, res) => {
  const respuesta = await pool.query();
};
