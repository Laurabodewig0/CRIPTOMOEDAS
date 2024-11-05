import {Schema,model} from 'mongoose'

const presencaSchema= new Schema ({
      id: { type: Schema.Types.ObjectId,
        ref: 'Presenca',
        required: true 
    },
      presencaAluno: { type: Number,
        ref: 'Presenca',
        required: true 
    },
      faltasAluno: { type: Number,
        ref: 'Presenca',
        required: true
      },
      contagemMaximaFaltas:{ type: Number,
        ref: 'Presenca',
        required: true
      },
      minimoPresencaExigida:{ type: Number,
        ref: 'Presenca',
        required: true
      },
    
        dataCriacaoPresenca: { type: Date, required: true }
    });

export default model ('Presenca', presencaSchema)