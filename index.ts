import conectarBD from './db/db';
import { UserModel } from './models/user'
import { Enum_Rol, Enum_TipoObjetivo } from './models/enums'
import { ProjectModel } from './models/project';
import { ObjectiveModel } from './models/objective';


const main = async () => {
    await conectarBD();

    // CREAR OBJETIVOS
    // const obj = ObjectiveModel.create({
    //     descripcion: "Objetivo especifico",
    //     tipo: Enum_TipoObjetivo.especifico, 
    // })
    // CRUD PROYECTOS

    // CREAR PROYECTO
    ProjectModel.create({
        nombre: "Proyecto 3",
        presupuesto: 500,
        fechaInicio: Date.now(),
        fechaFin: new Date("2022/11/10"),
        lider: '6190575b808dcfa9c520711c',
        objetivos: [
            '619068dff5418a3f0a3734ef', '61906b3bc39bd8b9509e13d5'
        ],
    });

    // BUSCAR UN PROYECTO
    // const proyecto: any = await ProjectModel.find({nombre: 'Proyecto 2'}).populate('lider');
    // console.log ('El proyecto es: ', proyecto);

    // const lider = await UserModel.find({ _id: proyecto[0].lider });
    // console.log('El lider del proyecto es: ', lider);
 
};
main();


// CRUD 

// CREAR UN USUARIO
    // await UserModel.create({
    // apellido: "Alvarez",
    // correo: "alvarez.j@mail.com",
    // identificacion: "45212",
    // nombre: "Miguel",
    // rol:  Enum_Rol.administrador,

    // })
    // .then((u) => {
    //     console.log('usuarios', u);
    // })
    // .catch((e) =>{
    //     console.error('Error obteniendo los usuarios', e)
    // });

    // // OBTENER LOS USUARIO
    // await UserModel.find()
    // .then((u) => {
    //     console.log('usuarios', u);
    // })
    // .catch((e) =>{
    //     console.error('Error obteniendo los usuarios', e)
    // });

    // EDITAR UN USUARIO
    // await UserModel.findOneAndUpdate(
    //     { correo: "ruiz.miguel@gmail.com"},
    //     {
    //         nombre: "Miguel",
    //         apellido: "ruiz"
    //     }
    // )
    //     .then((u) => {
    //         console.log('usuario actualizado con éxito', u);
    //     })
    //     .catch((e) =>{
    //         console.error('Error actualizando el usuarios', e)
    //     });

    // ELIMINAR UN USUARIO
    // await UserModel.findOneAndDelete(
    //     { correo: "ruiz.miguel@gmail.com"},
      
    // )
    //     .then((u) => {
    //         console.log('usuario eliminado con éxito', u);
    //     })
    //     .catch((e) =>{
    //         console.error('Error eliminado el usuarios', e)
    //     });





