import { Schema, model } from 'mongoose'

const estudianteSchema = new Schema({
    nombre: {
        type: String,
        require: true,
        trim: true
    },
    apellido: {
        type: String,
        require: true,
        trim: true
    },
    cedula: {
        type: String,
        require: true,
        trim: true
    },
    fecha_nacimiento: {
        type: String,
        require: true,
        trim: true
    },
    ciudad: {
        type: String,
        require: true,
        trim: true
    },
    direccion: {
        type: String,
        require: true,
        trim: true
    },
    telefono: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        trim: true
    }
},)

export default model('Estudiante', estudianteSchema)

// Notas: 
// trim - elimina espacios en blanco al principio y al final del valor ingresado