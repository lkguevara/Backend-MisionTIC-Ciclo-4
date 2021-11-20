import mongoose from 'mongoose';
//import { Enum_EstadoProyecto, Enum_FaseProyecto, Enum_TipoObjetivo } from './enums.js';
//import { ObjectiveModel } from './objective.js';
import { UserModel } from './user.js';

const {Schema,model} = mongoose;

// interface Proyecto {
//   nombre: string;
//   presupuesto: number;
//   fechaInicio: Date;
//   fechaFin: Date;
//   estado: Enum_EstadoProyecto;
//   fase: Enum_FaseProyecto;
//   lider: Schema.Types.ObjectId;
//   objetivos: [Schema.Types.ObjectId];
// }

const projectSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  presupuesto: {
    type: Number,
    required: true,
  },
  fechaInicio: {
    type: Date,
    required: true,
  },
  fechaFin: {
    type: Date,
    required: true,
  },
  estado: {
    type: String,
    enum: ['Activo','Inactivo'],
    default: 'Inactivo',
  },
  fase: {
    type: String,
    enum: ['Iniciado','En Desarrollo','Terminado','Nula'],
    default: 'nula',
  },
  lider: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: UserModel,
  },
  // objetivos: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: ObjectiveModel,
  //   },
  // ],

  objetivos: [
      {
        descripcion: {
          type: String,
          required: true,
        },
        tipo: {
          type: String,
          enum: ['GENERAL', 'ESPECIFICO'],
          required: true,
        },
      },
    ],
});

const ProjectModel = model('Proyecto', projectSchema);

export { ProjectModel };
