import mongoose from "mongoose"
import generarJWT from "../helpers/crearJWT.js"
import Usuario from "../models/Usuario.js"

const loginUsuario = async(req,res) => {
    const {email,password} = req.body
    if (Object.values(req.body).includes(" ")) return res.status(400).json({msg:'Lo sentimos, debe llenar todos los campos'})
    const usuarioBDD = await Usuario.findOne({email}).select("-__v -updatedAt -createdAt")
    if (!usuarioBDD) return res.status(404).json({msg:'Lo sentimos, el usuario no se encuentra registrado'})
    const verificarPassword = await usuarioBDD.matchPassword(password)
    if (!verificarPassword) return res.status(404).json({msg:'Lo sentimos, el password no es el correcto'})
    
    const token = generarJWT(usuarioBDD._id)
    
    const {nombre, apellido, _id} = usuarioBDD 
    res.status(200).json({
        _id,
        token,
        nombre,
        apellido,
        email: usuarioBDD.email
    })
}

// No necesario
const registro = async(req,res) => {
    const {email,password} = req.body
    if (Object.values(req.body).includes(" ")) return res.status(400).json({msg:"Lo sentimos, debes llenar todos los campos"})
    const verificarEmailBDD = await Usuario.findOne({email})
    if(verificarEmailBDD) return res.status(400).json({msg:"Lo sentimos, el email ya se encuentra registrado"})
    const nuevoUsuario = new Usuario(req.body)
    nuevoUsuario.password = await nuevoUsuario.encryptPassword(password)
    await nuevoUsuario.save()
    res.status(200).json({nuevoUsuario})
}

const detalleUsuario = async (req,res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({msg:"ID no válido"})
    const usuarioBDD = await Usuario.findById(id).select('-password')
    if (!usuarioBDD) return res.status(404).json({msg:'No existe el usuario'})
    res.status(200).json({msg:usuarioBDD})
}

const perfil = (req,res) => {
    delete req.usuarioBDD.createdAt
    delete req.usuarioBDD.updatedAt
    delete req.usuarioBDD.__v
    res.status(200).json({msg:req.usuarioBDD})
}

const moduloEstudiantes = (req,res) => {
    res.send('Modulo estudiantes')
}

const moduloMatriculas = (req,res) => {
    res.send('Modulo matriculas')
}

export {
    loginUsuario,
    registro,
    perfil,
    detalleUsuario,
    moduloEstudiantes,
    moduloMatriculas
}