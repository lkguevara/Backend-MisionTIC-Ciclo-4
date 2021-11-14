// yarn add typescript ts-node Instalar paks de typescript

import { connect } from 'mongoose'; //npm install mongoose//

const conectarBD = async () => {
  return await connect("mongodb+srv://admin:admin@fenixprojects.yrtr4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    .then(() => {
      console.log('Conexion exitosa');
    })
    .catch((e) => {
      console.error('Error conectando a la bd', e);
    });
};

export default conectarBD;
