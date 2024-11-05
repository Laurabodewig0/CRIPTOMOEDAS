import {Schema,model} from 'mongoose'

const localizacaoSchema= new Schema ({
      id: { type: Schema.Types.ObjectId,
        ref: 'Localizacao',
        required: true 
    },
      escola: { type: String,
        ref: 'Localizacao',
        required: true 
    },
      cidade: { type: String,
        ref: 'Localizacao',
        required: true
      },
      bairro: { type: String,
        ref: 'Localizacao',
        required: true
      },
      presencaAluno: { type: Number,
        ref: 'Localizacao',
        required: true
      },
      faltasAluno: { type: Number,
        ref: 'Localizacao',
        required: true
      },
       
        dataCriacaoLocalizacao: { type: Date, required: true }
    });

export default model ('Localizacao', localizacaoSchema)

