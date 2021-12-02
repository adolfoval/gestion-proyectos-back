import conectarBd from "./db/db";
import { UserModel } from "./models/user";
import { Enum_rol, Enum_TipoObjetivo } from "./models/enums";
import { ProjectModel } from "./models/project";
import { ObjectiveModel } from "./models/objectives";
import {Schema} from "mongoose";
import { isAwaitExpression } from "typescript";

const main = async () => {
    await conectarBd();

};

main();

 //forma 1, relacionen la parte "many" (En el objetivo)
    /* 
    1.crear el proyecto 
    2.crear los objetivos
    3.para consultar hacer un query a los objetivos 
    y luego hacer un query para traer el proyecto.    

    1.
    const project = await ProjectModel.create({
        nombre: "Proyecto 1",
        fechaInicio: new Date("2021/12/24"),
        fechaFin: new Date("2022/12/24"),
        presupuesto: 120000,
        lider: "61985bcd73df45b9059cad80",
    });

    console.log("Proyecto creado ", project);
    2.
    const generalObjective = await ObjectiveModel.create({
        descripcion: "Este es el objetivo general del proyecto 1", 
        tipo: Enum_TipoObjetivo.general,
        proyecto: "619eab6ee12b0565101b36e8",
    });

    const objetivoEspecifico1 = await ObjectiveModel.create({
        descripcion: "Este es el objetivo especifico 1 de proyecto 1",
        tipo: Enum_TipoObjetivo.especifico,
        proyecto: "619eab6ee12b0565101b36e8",
    });
    
    const objetivoEspecifico2 = await ObjectiveModel.create({
        descripcion: "Este es el objetivo especifico 2 de proyecto 1",
        tipo: Enum_TipoObjetivo.especifico,
        proyecto: "619eab6ee12b0565101b36e8",
    });

    3.
    const consulta = await ProjectModel.findOne({ _id: "619eab6ee12b0565101b36e8" });
    const obje = await ObjectiveModel.find({project: "619eab6ee12b0565101b36e8"});
    console.log("El proyecto que encontre fue ", consulta);
    console.log("Y los objetivos son: ", obje);
    */

    /*
    2.referencia en la parte one de la relacion
    
    1.crear los objetivos
    2.crear el proyecto y asociarle los objetivos
    3.consultarel proyecto con populate
   

    const generalObjective = await ObjectiveModel.create({
        descripcion: "Este es el objetivo general del proyecto 1", 
        tipo: Enum_TipoObjetivo.general,
    });

    const objetivoEspecifico1 = await ObjectiveModel.create({
        descripcion: "Este es el objetivo especifico 1 de proyecto 1",
        tipo: Enum_TipoObjetivo.especifico,
    });
    
    const objetivoEspecifico2 = await ObjectiveModel.create({
        descripcion: "Este es el objetivo especifico 2 de proyecto 1",
        tipo: Enum_TipoObjetivo.especifico,
    });

    const project = await ProjectModel.create({
        nombre: "Proyecto 1",
        fechaInicio: new Date("2021/12/24"),
        fechaFin: new Date("2022/12/24"),
        presupuesto: 120000,
        lider: "61985bcd73df45b9059cad80",
        objetivos: [generalObjective._id, 
            objetivoEspecifico1._id, 
            objetivoEspecifico2
        ]
    });
    const proyecto = await ProjectModel.find({ id: "619ebe3b4b1f4f2d104403dd" }).populate(
        "objetivos"
        );
        console.log("El proyecto encontrado fue: ", JSON.stringify(proyecto));
        */

        /*
    3.No hacer referencia y registrar los elementos many directamente en el one
    
    1.crear el proyecto y agregar manualmente los objetivos
    2.consultar el proyecto
       
   const proyecto = await ProjectModel.create({
    nombre: "Proyecto 1",
    fechaInicio: new Date("2021/12/24"),
    fechaFin: new Date("2022/12/24"),
    presupuesto: 120000,
    lider: "61985bcd73df45b9059cad80",
    objetivos:[
        {descripcion: "Este es el objetivo general", tipo: Enum_TipoObjetivo.general},
        {descripcion: "Este es el objetivo Especifico 1", tipo: Enum_TipoObjetivo.especifico},
        {descripcion: "Este es el objetivo Especifico 2", tipo: Enum_TipoObjetivo.especifico},
    ]
   });
   
   const proyecto = await ProjectModel.find({id: "619ec34dcee2def9c24aa820"});
   console.log("El proyecto creado es: ", proyecto)
   */ 

//Crear un proyecto
// const objective = await ObjectiveModel.create({
    //     descripcion: "Este es el objetivo especifico 2", 
    //     tipo: Enum_TipoObjetivo.especifico,
    //     proyecto: "619af5749b71a32da3561db3",
    // });

 //Crear usuario
    // UserModel.create({
    //     apellido:"Parra",
    //     correo: "parracarss.com",
    //     identificacion: "658898",
    //     nombre: "Carlos",
    //     rol: Enum_rol.administrador,
    // }).then((u) =>{
    //     console.log("Usuario creado", u);
    // }).catch(e =>{
    //     console.log("Error creando el usuario", e);
    // });

    // Obtener los usuarios 
    // await UserModel.find().then((u) =>{
    //     console.log("Ususario ", u);
    // }).catch(e => {
    //     console.error("Error obteniendo los usuarios", e);
    // });

    //Obtener un usuario
    // await UserModel.findOne({identificacion: "12565"}).
    // then((user) =>{
    //     console.log("Usuario encontrado", user);
    // })
    // .catch((error => {
    //     console.error("Usuario no encontrado", error);
    // }));

    //Editar usuario
    // await UserModel.findOneAndUpdate(
    //     { nombre: 'Adolfo' },
    //     {
    //         apellido: "Valdivieso",
    //     }
    // )
    // .then(u => {
    //     console.log("Usuario actualizado", u);
    // })
    // .catch(e => {
    //     console.log("Error al actualizar", e);
    // });

    //Eliminar usuario
    // await UserModel.findOneAndDelete({correo: "saldarro@.com"})
    // .then((user) =>{
    //     console.log("Usuario eliminado", user);
    // })
    // .catch((error) =>{
    //     console.log("Error al eliminar", error);
    // });

    //crear objetivo especifico
     // const objective = await ObjectiveModel.create({
    //     descripcion: "Este es el objetivo especifico", 
    //     tipo: Enum_TipoObjetivo.especifico,
    // });

    //Crear proyecto
    // ProjectModel.create({
    //     nombre: "Proyecto 3",
    //     presupuesto: 120,
    //     fechaInicio: Date.now(),
    //     fechaFin: new Date("2022/11/10"),
    //     lider: "6198571c01f9e4f10f390af4",
    //     objetivos:[ "619af1750de6b712830edb15", "619af4abbc1382d843e06c0e"]
    // })
    // .then((project) =>{
    //     console.log("Proyecto creado", project);
    // })
    // .catch((error) =>{
    //     console.log("Error al crear proyecto", error);
    // });

    //Buscar un proyecto con su lider
    // ProjectModel.find({nombre: "Proyecto 3"})
    // .populate("lider")
    // .populate("objetivos")
    // .then((project) =>{
    //     //console.log("El proyecto es", project);
    //     console.log(JSON.stringify(project));
    // }).
    // catch((error) =>{
    //     console.log("Error encontrando el documento", error);
    // });