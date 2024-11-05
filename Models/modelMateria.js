import {Schema,model} from 'mongoose'

const materiaSchema= new Schema ({
    id: { type: Schema.Types.ObjectId,
        ref: 'Materia',
        required: true 
    },
      alunoMelhorMateria: { type: String,
        ref: 'Materia',
        required: true 
    },
      alunoPiorMateria: { type: String,
        ref: 'Materia',
        required: true
      },
      alunoMelhorNota: { type: Number,
        ref: 'Materia',
        required: true
      },
      alunoPiorNota: { type: Number,
        ref: 'Materia',
        required: true
      },
      melhorProfessorMateria: { type: String,
        ref: 'Materia',
        required: true
      },
      piorProfessorMateria: { type: String,
        ref: 'Materia',
        required: true
      },
  
        dataCriacaoMateria: { type: Date, required: true }
    });

export default model ('Materia', materiaSchema)