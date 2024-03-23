import { Router } from 'express'
import verificarAutenticacion from '../middlewares/autenticacion.js'

import {
    loginUsuario,
    registro,
    perfil,
    detalleUsuario,
    moduloEstudiantes,
    moduloMatriculas
} from '../controllers/usuario_controller.js'


const router = Router()

router.post('/login', loginUsuario)

router.post('/registro', registro)

router.get('/perfil', verificarAutenticacion, perfil)

router.get('/usuario/:id', verificarAutenticacion, detalleUsuario)


export default router