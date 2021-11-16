import conectarBD from './db/db';
import { UserModel } from './models/user'
import { Enum_EstadoUsuario, Enum_Rol, Enum_TipoObjetivo, Enum_EstadoInscripcion } from './models/enums'
import { ProjectModel } from './models/project';
import { ObjectiveModel } from './models/objective';
import { InscriptionModel } from './models/inscripcion';
import { AdvancementModel } from './models/avances';

// METODOLOGÍA UNO - MUCHOS #1
const crearProyectoConObjetivos1 = async () => {
    // CREAR UN USUARIO
    const usuario = await UserModel.create({
        nombre: "Roberto",
        apellido: "Jimenez",
        correo: "Jimenez.R@mail.com",
        identificacion: "78963",
        rol:  Enum_Rol.administrador,
        estado: Enum_EstadoUsuario.autorizado

        });

    // CREAR UN PROYECTO
    const proyecto = await ProjectModel.create({
        nombre: "Proyecto 5",
        fechaInicio: Date.now(),
        fechaFin: new Date("2022/12/10"),
        presupuesto: 1200,
        lider: '6191643e579438f8e1456f0e',
        
    });

    // CREAR UN OBJETIVO GENERAL
    const objetivoGeneral = await ObjectiveModel.create({
        descripcion: "Objetivo general",
        tipo: Enum_TipoObjetivo.general,
        proyecto: proyecto._id,
    })

    // // CREAR UN OBJETIVO ESPECIFICO
    const objetivoEspecifico1 = await ObjectiveModel.create({
        descripcion: "Objetivo especifico 1",
        tipo: Enum_TipoObjetivo.especifico,
        proyecto: proyecto._id,
    })
    const objetivoEspecifico2 = await ObjectiveModel.create({
        descripcion: "Objetivo especifico 2",
        tipo: Enum_TipoObjetivo.especifico,
        proyecto: proyecto._id,
    })

    console.log('proyecto creado', proyecto)
};

const consultaProyectoConObjetivos = async () => {
    const proyecto = await ProjectModel.findOne({_id: '6191643f579438f8e1456f11'})
    console.log ('El proyecto encontrado es:', proyecto)

    const objetivos = await ObjectiveModel.findOne({project : '6191643f579438f8e1456f11'})
    console.log ('Los objetivos del proyecto son:', objetivos);

    // const ProyectoConObjetivos = {... proyecto, objetivos: objetivos };
    // console.log('El proyecto con objetivos es:', ProyectoConObjetivos)
}

// METODOLOGÍA UNO - MUCHOS #2
const crearProyectoConObjetivos2= async () => {
        // CREAR UN USUARIO
        const usuario = await UserModel.create({
            nombre: "Maia",
            apellido: "Lopez",
            correo: "mlopez.R@mail.com",
            identificacion: "147852",
            rol:  Enum_Rol.administrador,
            estado: Enum_EstadoUsuario.autorizado
    
            });

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
};
    
const consultaProyectoConObjetivos2 = async () => {
    const proyecto = await ProjectModel.find({_id: '6191643f579438f8e1456f11'}).populate('objetivos')
    console.log ('El proyecto encontrado es:', proyecto)
};

const crearInscripcion = async () => {
    const inscripcion = await InscriptionModel.create({
        estado: Enum_EstadoInscripcion.aceptada,
        fechaIngreso: Date.now(),
        fechaEgreso: new Date("2022/12/10"),
        proyecto: '61916b9c5a178c717c6285af',
        estudiante: '61916b9b5a178c717c6285a5',
    });
  
    console.log('Inscripción creada', inscripcion)
}

const crearAvance = async () => {
    const avance = await AdvancementModel.create({
        fecha: Date.now(),
        descripcion: 'Avance para el proyecto',
        observacion: 'observacion 1',
        proyecto: '61916b9c5a178c717c6285af',
        creadoPor: '61916b9b5a178c717c6285a5',
    });
  
    console.log('Avance creado', avance)
};



const main = async () => {
    await conectarBD();

    
    
};
main();





// ####################################################################################################################

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

// ########################################################################################################

// CREAR OBJETIVOS
    // const obj = ObjectiveModel.create({
    //     descripcion: "Objetivo especifico",
    //     tipo: Enum_TipoObjetivo.especifico, 
    // })

    // CREAR PROYECTO
    // ProjectModel.create({
    //     nombre: "Proyecto 4",
    //     presupuesto: 500,
    //     fechaInicio: Date.now(),
    //     fechaFin: new Date("2022/12/10"),
    //     lider: '6190575b808dcfa9c520711c',
    //     objetivos: [
    //         '619068dff5418a3f0a3734ef', '61906b3bc39bd8b9509e13d5'
    //     ],
    // });

    // BUSCAR UN PROYECTO
    // const proyecto: any = await ProjectModel.find({nombre: 'Proyecto 2'}).populate('lider').populate('objetivos');
    // console.log ('El proyecto es: ', JSON.stringify(proyecto));

    // const lider = await UserModel.find({ _id: proyecto[0].lider });
    // console.log('El lider del proyecto es: ', lider);



