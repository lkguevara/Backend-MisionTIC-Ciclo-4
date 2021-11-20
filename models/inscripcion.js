import mongoose from 'mongoose';
//import { Enum_EstadoInscripcion } from './enums.js';
import { ProjectModel } from './project.js';
import { UserModel } from './user.js';

const {Schema,model} = mongoose;

// interface Inscription {
//   estado: Enum_EstadoInscripcion;
//   fechaIngreso: Date;
//   fechaEgreso: Date;
//   proyecto: Schema.Types.ObjectId;
//   estudiante: Schema.Types.ObjectId;
// }

const inscriptionSchema = new Schema({
  estado: {
    type: String,
    enum: ['Aceptada','Rechazada','Pendiente'],
    default:'Pendiente',
    required: true,
  },
  fechaIngreso: {
    type: Date,
    required: true,
  },
  fechaEgreso: {
    type: Date,
    required: true,
  },
  proyecto: {
    type: Schema.Types.ObjectId,
    ref: ProjectModel,
    required: true,
  },
  estudiante: {
    type: Schema.Types.ObjectId,
    ref: UserModel,
    required: true,
  },
});

const InscriptionModel = model('Inscripcion', inscriptionSchema);

export { InscriptionModel };
