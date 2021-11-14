import conectarBD from './db/db';
import { UserModel } from './models/user'
import { Enum_Rol } from './models/enums'


const main = async () => {
    await conectarBD();

    // CREAR UN USUARIO
    await UserModel.create({
    apellido: "Gomez",
    correo: "gomez.j@mail.com",
    identificacion: "12345",
    nombre: "Jorge",
    rol:  Enum_Rol.administrador,

});

    // // OBTENER LOS USUARIO
    // await UserModel.find()
    // .then((u) => {
    //     console.log('usuarios', u);
    // })
    // .catch((e) =>{
    //     console.error('Error obteniendo los usuarios', e)
    // });
};
main();