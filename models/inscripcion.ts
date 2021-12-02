import {Schema, model} from "mongoose";
import {Enum_estadoInscripcion} from "./enums";
import { ProjectModel } from "./project";
import { UserModel } from "./user";

interface Inscripcion{
    estado: Enum_estadoInscripcion;
    fechaIngreso: Date;
    fechaEgreso: Date;
    proyecto : Schema.Types.ObjectId;
    estudiante: Schema.Types.ObjectId;
}

const inscripcionSchema = new Schema<Inscripcion>({
    estado:{
        type: String,
        enum: Enum_estadoInscripcion,
        required:true,
    },
    fechaIngreso:{
        type: Date,
        required: true,
    },
    fechaEgreso:{
        type: Date,
        required: true,
    },
    proyecto:{
        type: Schema.Types.ObjectId,
        ref:ProjectModel,
        required: true,
    },
    estudiante:{
        type: Schema.Types.ObjectId,
        ref:UserModel,
        required:true,
    },
});

const InscripcionModel = model("Inscription", inscripcionSchema);
export {InscripcionModel};