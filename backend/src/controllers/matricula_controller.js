import mongoose from "mongoose"
import Matricula from "../models/Matricula.js"
import Estudiante from "../models/Estudiante.js"
import Materia from "../models/Materia.js"

const registrarMatricula = async(req,res) => {

    try {
        const {codigo,id_estudiante,id_materia} = req.body
        if (Object.values(req.body).includes('')) return res.status(400).json({msg:'Lo sentimos, debe llenar todos los campos'})
        const verificarCodigoBDD = await Matricula.findOne({codigo})
        if (verificarCodigoBDD) return res.status(400).json({msg:'Lo sentimos, el código ya se encuentra registrado'})
    
        if (!mongoose.Types.ObjectId.isValid(id_estudiante)) return res.status(404).json({msg:`Lo sentimos, debe ser un id válido`})
        if (!mongoose.Types.ObjectId.isValid(id_materia)) return res.status(404).json({msg:`Lo sentimos, debe ser un id válido`})
        
        const verificarEstudianteBDD = await Estudiante.findById(id_estudiante)
        if (!verificarEstudianteBDD) return res.status(400).json({msg:'El estudiante no se encuentra registrado'})
    
        
        const verificarMateriaBDD = await Materia.findById({id_materia})
        if (!verificarMateriaBDD) return res.status(400).json({msg:'La materia no se encuentra registrada'})
    
        const existeMatricula = await Matricula.findOne({id_estudiante,id_materia})
        if (existeMatricula) return res.status(400).json({msg:'La combinación de estudiante y materia ya está registrada'})
    
        const nuevaMatricula = new Matricula(req.body)
        await nuevaMatricula.save()
        res.status(200).json({msg:'Matricula registrada exitosamente'})
    } catch (error) {
        console.log(error)
    }
}

const detalleMatricula = async(req,res) => {}

const actualizarMatricula = async(req,res) => {}

const eliminarMatricula = async(req,res) => {}


export {
    registrarMatricula,
    detalleMatricula,
    actualizarMatricula,
    eliminarMatricula
}