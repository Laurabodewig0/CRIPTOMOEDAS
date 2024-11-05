import {Schema,model} from 'mongoose'

const humorSchema= new Schema ({
      id: { type: Schema.Types.ObjectId,
        ref: 'Humor',
        required: true 
    },
      aluno: { type: String,
        ref: 'Humor',
        required: true 
    },
      professor: { type: String,
        ref: 'Humor',
        required: true
      },
      avaliacao: { type: Number,
        ref: 'Humor',
        required: true
      },
      materia: { type: String,
        ref: 'Humor',
        required: true
      },
      turma: { type: Number,
        ref: 'Humor',
        required: true
      },
      sala: { type: Number,
        ref: 'Humor',
        required: true
      },
      localizacao: { type: String,
        ref: 'Humor',
        required: true
      },
        dataCriacaoHumor: { type: Date, required: true }
    });

export default model ('Humor', humorSchema)


