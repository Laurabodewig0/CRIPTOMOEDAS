import {Schema,model} from 'mongoose'

const professorSchema= new Schema ({
      id: { type: Schema.Types.ObjectId,
        ref: 'Professor',
        required: true 
    },
      nome: { type: String,
        ref: 'Professor',
        required: true 
    },
      idade: { type: Number,
        ref: 'Professor',
        required: true
      },
      materia: { type: String,
        ref: 'Professor',
        required: true
      },
      turmaSelecionada: { type: Number,
        ref: 'Professor',
        required: true
      },
      melhoresAlunos: { type: String,
        ref: 'Professor',
        required: true
      },
      pioresAlunos: { type: String,
        ref: 'Professor',
        required: true
      },
      presencaAlunos: { type: Number,
        ref: 'Professor',
        required: true
      },
      faltaAlunos: { type: Number,
        ref: 'Professor',
        required: true
      },
     
        dataCriacaoProfessor: { type: Date, required: true }
    });

export default model ('Professor', professorSchema)