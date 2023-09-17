import { Router } from "express";
import { getCaracteristicas ,
    getIdCaracteristicas,
    postCaracteristicas,
    updateCaracteristicas,
    deleteCaracteristicas 
      } from "../controllers/caracteristicas.controllers.js";
      
const router = Router()


router.get('/caracteristicas', getCaracteristicas  )

router.get('/caracteristicas/:id', getIdCaracteristicas  )

router.post('/caracteristicas', postCaracteristicas  )

router.put('/caracteristicas/:id', updateCaracteristicas  )

router.delete('/caracteristicas/:id', deleteCaracteristicas  )

export default router
