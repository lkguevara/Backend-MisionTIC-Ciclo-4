import conectarBD from './db/db';
import { UserModel } from './models/user'
import { Enum_EstadoUsuario, Enum_Rol, Enum_TipoObjetivo, Enum_EstadoInscripcion } from './models/enums'
import { ProjectModel } from './models/project';
import { ObjectiveModel } from './models/objective';
import { InscriptionModel } from './models/inscripcion';
import { AdvancementModel } from './models/avances';


// CRUD DATABASE
const crudUsuarios= async () => {

        // CREAR UN USUARIO
    await UserModel.create({
        nombre: "Lorenzo",
        apellido: "Velez",
        correo: "velez.lorenzo456@mail.com",
        identificacion: "7418578",
        rol:  Enum_Rol.administrador,
        estado: Enum_EstadoUsuario.autorizado
    })
    .then((u) => {
        console.log('usuario creado con exito:', u);
    })
    .catch((e) =>{
        console.error('Error creando el usuario', e)
    });

        // LISTAR USUARIOS 
    await UserModel.find()
    .then((u) => {
        console.log('Los usuarios creados son:', u);
    })
    .catch((e) =>{
        console.error('Error obteniendo los usuarios', e)
    });

        // EDITAR UN USUARIO
    await UserModel.findOneAndUpdate(
        { correo: "ruiz.miguel@gmail.com"},
        {
            nombre: "Miguel",
            apellido: "ruiz"
        })
    .then((u) => {
        console.log('usuario actualizado con éxito', u);
    })
    .catch((e) =>{
        console.error('Error actualizando el usuarios', e)
    });

        // ELIMINAR UN USUARIO
    await UserModel.findOneAndDelete(
        { correo: "ruiz.miguel@gmail.com"},)
    .then((u) => {
        console.log('usuario eliminado con éxito', u);
    })
    .catch((e) =>{
        console.error('Error eliminado el usuarios', e)
    });

};

const crudProyectos= async () => {

        // CREAR UN OBJETIVO GENERAL
        const objetivoGeneral = await ObjectiveModel.create({
            descripcion: "Objetivo general",
            tipo: Enum_TipoObjetivo.general,
            
        })
    
        // // CREAR UN OBJETIVO ESPECIFICO
        const objetivoEspecifico1 = await ObjectiveModel.create({
            descripcion: "Objetivo especifico 1",
            tipo: Enum_TipoObjetivo.especifico,
            
        })
        const objetivoEspecifico2 = await ObjectiveModel.create({
            descripcion: "Objetivo especifico 2",
            tipo: Enum_TipoObjetivo.especifico,
            
        })

        // CREAR UN PROYECTO
        const proyecto = await ProjectModel.create({
            nombre: "Proyecto 6",
            fechaInicio: Date.now(),
            fechaFin: new Date("2022/12/10"),
            presupuesto: 1200,
            lider: '6191643e579438f8e1456f0e',
            objetivos: [
                objetivoGeneral._id,
                objetivoEspecifico1._id,
                objetivoEspecifico2._id,
            ]
            
        });
    
        console.log('proyecto creado', proyecto)

        //CONSULTAR PROYECTOS CON OBJETIVOS

        const consultaProyectoConObjetivos2 = async () => {
            const proyecto = await ProjectModel.find({_id: '6191643f579438f8e1456f11'}).populate('objetivos')
            console.log ('El proyecto encontrado es:', proyecto)
        };

        //LISTAR PROYECTOS

         await ProjectModel.find()
        .then((u) => {
            console.log('Listado de proyectos:', u);
             })
        .catch((e) =>{
             console.error('Error obteniendo los proyectos', e)
            });

        //EDITAR UN PROYECTO

         await ProjectModel.findOneAndUpdate(
         { nombre:  'Proyecto 1'},
         {
           
            fechaFin: new Date("2022/12/11"),
            presupuesto: 1500,
            
            
         })
         .then((u) => {
            console.log('proyecto actualizado con éxito', u);
         })
         .catch((e) =>{
             console.error('Error actualizando el proyecto', e)
         });


         // ELIMINAR UN PROYECTO
        await ProjectModel.findOneAndDelete(
            { nombre: 'Proyecto 1'},)
        .then((u) => {
            console.log('Proyecto eliminado con éxito', u);
        })
        .catch((e) =>{
            console.error('Error eliminando el proyecto', e)
        });


       


};
    
const crudInscripcion = async () => {

    // CREAR INSCRIPCIÓN
    const inscripcion = await InscriptionModel.create({
        estado: Enum_EstadoInscripcion.aceptada,
        fechaIngreso: Date.now(),
        fechaEgreso: new Date("2022/12/10"),
        proyecto: '61916b9c5a178c717c6285af',
        estudiante: '61916b9b5a178c717c6285a5',
    });
  
    console.log('Inscripción creada', inscripcion)


    //LISTAR INSCRIPCIONES
 
    await InscriptionModel.find()
    .then((u) => {
        console.log('Lista de inscripciones: ', u);
    })
    .catch((e) =>{
        console.error('Error obteniendo lista de inscripciones', e)
    });


     // EDITAR UNA INSCRIPCION


    // await InscriptionModel.findOneAndUpdate(
    //     {id: "6193d5d512714660ca11fcfa"},
    //     {
    //         estado: "Rechazado",
            
    //     })
    // .then((u) => {
    //     console.log('usuario actualizado con éxito', u);
    // })
    // .catch((e) =>{
    //     console.error('Error actualizando el usuarios', e)
    // });




        // ELIMINAR UNA INSCRIPCION

    await InscriptionModel.findOneAndDelete(
        { id: "6193d5d512714660ca11fcfa"},)
    .then((u) => {
        console.log('inscripcion eliminada con éxito', u);
    })
    .catch((e) =>{
        console.error('Error eliminando inscripcion', e)
    });

    





}

const crudAvance = async () => {

    // CREAR AVANCE
    const avance = await AdvancementModel.create({
        fecha: Date.now(),
        descripcion: 'Avance para el proyecto',
        observacion: 'observacion 1',
        proyecto: '61916b9c5a178c717c6285af',
        creadoPor: '61916b9b5a178c717c6285a5',
    });
  
    console.log('Avance creado', avance)

     // LISTAR AVANCES

    await AdvancementModel.find()
    .then((u) => {
        console.log('Los avances son:', u);
    })
    .catch((e) =>{
        console.error('Error obteniendo los avances', e)
    });


        // EDITAR UN AVANCE
    // await AdvancementModel.findOneAndUpdate(
    //     { id: "6191740015f039fed0e034b9"},
    //     {
    //         observaciones: "Miguel realizo CRUD",
            
    //     })
    // .then((u) => {
    //     console.log('avance actualizado con éxito', u);
    // })
    // .catch((e) =>{
    //     console.error('Error actualizando el avance', e)
    // });


        // ELIMINAR AVANCE

    await  AdvancementModel.findOneAndDelete(
        { id: "6193d63857aff13961a985e9"},)
    .then((u) => {
        console.log('avance eliminado con éxito', u);
    })
    .catch((e) =>{
        console.error('Error eliminado avance', e)
    });




};



const main = async () => {

    await conectarBD();
    
    // ESPACIO PARA INGRESAR EL CÓDIGO DEL CRUD
    
     




};
main();

// ##################################################################################################################

// SEGUNDA METODOLOGÍA
// // METODOLOGÍA UNO - MUCHOS #1
// const crearProyectoConObjetivos1 = async () => {
//     // CREAR UN USUARIO
//     const usuario = await UserModel.create({
//         nombre: "Roberto",
//         apellido: "Jimenez",
//         correo: "Jimenez.R@mail.com",
//         identificacion: "78963",
//         rol:  Enum_Rol.administrador,
//         estado: Enum_EstadoUsuario.autorizado

//         });

//     // CREAR UN PROYECTO
//     const proyecto = await ProjectModel.create({
//         nombre: "Proyecto 5",
//         fechaInicio: Date.now(),
//         fechaFin: new Date("2022/12/10"),
//         presupuesto: 1200,
//         lider: '6191643e579438f8e1456f0e',
        
//     });

//     // CREAR UN OBJETIVO GENERAL
//     const objetivoGeneral = await ObjectiveModel.create({
//         descripcion: "Objetivo general",
//         tipo: Enum_TipoObjetivo.general,
//         proyecto: proyecto._id,
//     })

//     // // CREAR UN OBJETIVO ESPECIFICO
//     const objetivoEspecifico1 = await ObjectiveModel.create({
//         descripcion: "Objetivo especifico 1",
//         tipo: Enum_TipoObjetivo.especifico,
//         proyecto: proyecto._id,
//     })
//     const objetivoEspecifico2 = await ObjectiveModel.create({
//         descripcion: "Objetivo especifico 2",
//         tipo: Enum_TipoObjetivo.especifico,
//         proyecto: proyecto._id,
//     })

//     console.log('proyecto creado', proyecto)
// };

// const consultaProyectoConObjetivos = async () => {
//     const proyecto = await ProjectModel.findOne({_id: '6191643f579438f8e1456f11'})
//     console.log ('El proyecto encontrado es:', proyecto)

//     const objetivos = await ObjectiveModel.findOne({project : '6191643f579438f8e1456f11'})
//     console.log ('Los objetivos del proyecto son:', objetivos);

//     // const ProyectoConObjetivos = {... proyecto, objetivos: objetivos };
//     // console.log('El proyecto con objetivos es:', ProyectoConObjetivos)
// }