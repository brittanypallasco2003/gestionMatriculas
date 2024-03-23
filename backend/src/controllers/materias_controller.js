import mongoose from "mongoose"
import Materia from "../models/Materia.js"


const registrarMateria = async (req,res) => {
    const {codigo} = req.body
    if (Object.values(req.body).includes('')) return res.status(400).json({msg:'Lo sentimos, debe llenar todos los campos'})
    const verificarCodigoBDD = await Materia.findOne({codigo})
    if (verificarCodigoBDD) return res.status(400).json({msg:'Lo sentimos, el codigo ya se encuentra registrado'})
    const nuevaMateria = new Materia(req.body)
    await nuevaMateria.save()
    res.status(200).json({msg:'Materia registrada exitosamente'})
}

const detalleMateria = async (req,res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({msg:'No existe la materia'})
    const materia = await Materia.findById(id)
    res.status(200).json(materia)
}

const actualizarMateria = async (req,res) => {
    const {id} = req.params
    const {codigo} = req.body
    if (Object.values(req.body).includes('')) return res.status(404).json({msg:'Lo sentimos, debes llenar todos los campos'})
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({msg:`No existe la materia ${codigo}`})
    await Materia.findByIdAndUpdate(req.params.id, req.body)
    res.status(200).json({msg:'Materia actualizada exitosamente'})
}

const eliminarMateria = async (req,res) => {
    const {id} = req.params
    const {codigo} = req.body
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({msg:`No existe la materia ${codigo}`})
    await Materia.findByIdAndDelete(req.params.id, req.body)
    res.status(200).json({msg:'Materia eliminada exitosamente'})
}

export {
    registrarMateria,
    detalleMateria,
    actualizarMateria,
    eliminarMateria
}