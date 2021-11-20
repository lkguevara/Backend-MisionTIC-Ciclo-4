// yarn add typescript ts-node Instalar paks de typescript

import mongoose from 'mongoose'; //npm install mongoose//
import dotenv from 'dotenv';

dotenv.config();

const conectarBD = async () => {
  return await mongoose.connect(process.env.DATABASE_URL)
    .then(() => {
      console.log('Conexion exitosa');
    })
    .catch((e) => {
      console.error('Error conectando a la bd', e);
    });
};

export default conectarBD;
