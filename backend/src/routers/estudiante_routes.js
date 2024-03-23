import { Router } from 'express'
import verificarAutenticacion from '../middlewares/autenticacion.js'

import { 
    registrarEstudiante,
    listarEstudiantes,
    detalleEstudiante,
    actualizarEstudiante,
    eliminarEstudiante
} from '../controllers/estudiante_controller.js'

const router = Router()

// router.get('/materias', verificarAutenticacion, moduloMaterias)

router.post('/estudiante/registrar',verificarAutenticacion, registrarEstudiante)

router.get('/estudiantes', verificarAutenticacion, listarEstudiantes)

router.get('/estudiante/:id', verificarAutenticacion, detalleEstudiante)

router.put('/estudiante/:id', verificarAutenticacion, actualizarEstudiante)

router.delete('/estudiante/:id', verificarAutenticacion, eliminarEstudiante)


export default router