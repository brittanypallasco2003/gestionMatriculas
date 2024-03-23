import { Router } from 'express'
import verificarAutenticacion from '../middlewares/autenticacion.js'

import { 
    registrarMatricula,
    detalleMatricula,
    actualizarMatricula,
    eliminarMatricula
} from "../controllers/matricula_controller.js"

const router = Router()

router.post('/matricula/registrar',verificarAutenticacion, registrarMatricula)

router.get('/matricula/:id', verificarAutenticacion, detalleMatricula)

router.put('/matricula/:id', verificarAutenticacion, actualizarMatricula)

router.delete('/matricula/:id', verificarAutenticacion, eliminarMatricula)


export default router