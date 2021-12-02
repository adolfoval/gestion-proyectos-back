import {Schema, model} from "mongoose";
import {Enum_rol, Enum_EstadoUsuario} from "./enums"

interface User{
    correo: string;
    identificacion: string;
    nombre: string;
    apellido: string;
    rol: Enum_rol;
    estado: Enum_EstadoUsuario;
};

const userSchema = new Schema<User>({
    correo:{
        type: String,
        required: true,
        unique: true,
        validate:{
            validator: (email) =>{
                if(!email.includes("@")){
                    return false;
                }
            },
            message: "El formato de correo no es valido."
        }
    },
    identificacion:{
        type: String,
        required: true,
        unique: true,
    },
    nombre: {
        type: String,
        required: true,
    },
    apellido: {
        type: String,
        required: true,
    },
    rol: {
        type: String,
        required: true,
        enum: Enum_rol,
    },
    estado:{
        type: String,
        enum: Enum_EstadoUsuario,
        default: Enum_EstadoUsuario.PENDIENTE,
    }
});

const UserModel = model("User", userSchema);

export  {UserModel};