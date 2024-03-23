import { Router } from 'express'
import verificarAutenticacion from '../middlewares/autenticacion.js'

import { 
    registrarMateria,
    detalleMateria,
    actualizarMateria,
    eliminarMateria
} from '../controllers/materias_controller.js'

const router = Router()

// router.get('/materias', verificarAutenticacion, moduloMaterias)

router.post('/materia/registrar',verificarAutenticacion, registrarMateria)

router.get('/materia/:id', verificarAutenticacion, detalleMateria)

router.put('/materia/:id', verificarAutenticacion, actualizarMateria)

router.delete('/materia/:id', verificarAutenticacion, eliminarMateria)


export default router