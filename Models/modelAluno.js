import {Schema,model} from 'mongoose'

const alunoSchema= new Schema ({
      id: { type: Schema.Types.ObjectId,
        ref: 'Aluno',
        required: true 
    },
      nome: { type: String,
        ref: 'Aluno',
        required: true 
    },
      idade: { type: Number,
        ref: 'Aluno',
        required: true
    },
      humor: { type: String,
        ref: 'Aluno',
        required: true
      },
      melhorMateria: { type: String,
        ref: 'Aluno',
        required: true
      },
      piorMateria: { type: String,
        ref: 'Aluno',
        required: true
      },
      melhorProfessor: { type: String,
        ref: 'Aluno',
        required: true
      },
      piorProfessor: { type: String,
        ref: 'Aluno',
        required: true
      },
     
        dataCriacaoAluno: { type: Date, required: true }
    });

export default model ('Aluno', alunoSchema)