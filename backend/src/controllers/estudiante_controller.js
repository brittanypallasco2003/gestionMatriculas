import mongoose from "mongoose"
import Estudiante from "../models/Estudiante.js"


const registrarEstudiante = async (req,res) => {
    const {cedula} = req.body
    if (Object.values(req.body).includes('')) return res.status(400).json({msg:'Lo sentimos, debe llenar todos los campos'})
    const verificarCedulaBDD = await Estudiante.findOne({cedula})
    if (verificarCedulaBDD) return res.status(400).json({msg:'Lo sentimos, la cédula ya se encuentra registrada'})
    const nuevoEstudiante = new Estudiante(req.body)
    await nuevoEstudiante.save()
    res.status(200).json({msg:'Estudiante registrado exitosamente'})
}

const listarEstudiantes = async (req,res) => {
    const estudiantes = await Estudiante.find()
    res.status(200).json(estudiantes)
}

const detalleEstudiante = async (req,res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({msg:'No existe el estudiante'})
    const estudiante = await Estudiante.findById(id)
    res.status(200).json(estudiante)
}

const actualizarEstudiante = async (req,res) => {
    const {id} = req.params
    const {cedula} = req.body
    if (Object.values(req.body).includes('')) return res.status(404).json({msg:'Lo sentimos, debes llenar todos los campos'})
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({msg:`No existe el estuadiante con cedula: ${cedula}`})
    await Estudiante.findByIdAndUpdate(req.params.id, req.body)
    res.status(200).json({msg:'Estudiante actualizado exitosamente'})
}

const eliminarEstudiante = async (req,res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({msg:`No existe el estudiante`})
    await Estudiante.findByIdAndDelete(req.params.id)
    res.status(200).json({msg:'Estudiante eliminado exitosamente'})
}

export {
    registrarEstudiante,
    listarEstudiantes,
    detalleEstudiante,
    actualizarEstudiante,
    eliminarEstudiante
}