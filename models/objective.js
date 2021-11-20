import mongoose from 'mongoose';
//import { Enum_TipoObjetivo } from './enums.js';
import { ProjectModel } from './project.js';

const {Schema,model} = mongoose;

// interface Objective {
//   descripcion: string;
//   tipo: Enum_TipoObjetivo;
  
// }

const objectiveSchema = new Schema({
  descripcion: {
    type: String,
    required: true,
  },
  tipo: {
    type: String,
    enum: ['General','Especifico'],
    required: true,
  },
  
});

const ObjectiveModel = model('Objetivo', objectiveSchema);

export { ObjectiveModel };
