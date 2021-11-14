import conectarBD from './db/db';
import { UserModel } from './models/user'
import { Enum_Rol } from './models/enums'


const main = async () => {
    await conectarBD();

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
    await UserModel.findOneAndDelete(
        { correo: "ruiz.miguel@gmail.com"},
      
    )
        .then((u) => {
            console.log('usuario eliminado con éxito', u);
        })
        .catch((e) =>{
            console.error('Error eliminado el usuarios', e)
        });



};
main();