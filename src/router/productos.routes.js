import { Router } from "express";
import {
  obtenerProductos,
  obtenerProductoId,
  borrarProducto,
  actualizarProducto,
  agregarProducto,
} from "../controllers/productos.contollers.js"

const router = Router();

router.get("/productos", obtenerProductos);

router.get("/productos/:id", obtenerProductoId);

router.post("/productos", agregarProducto);

router.patch("/productos/:id", actualizarProducto)

router.delete("/productos/:id", borrarProducto);

export default router;
