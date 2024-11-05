import Localizacao from '../models/modelLocalizacao.js'

export const store = async (req, res)=> {
    try {
        const localizacao= await Localizacao.create(req.body)
        return res.status(201).json(localizacao)
    }catch (error) {
        return res.status(500).json({erro:error})
    }
}
export const index = async (req,res)=> {
    try {
        const localizacoes= await Localizacao.find().exec()
        return res.status(200).json(localizacoes)
    }catch (error){
        return res.status(500).json({erro:error})
    }
}

export const update= async (req,res)=> {
    try {
        const localizacao= await Localizacao.findByIdAndUpdate(req.params.id, req.body).exec()
        return res.status(200).json(localizacao)
    }catch (error){
        return res.status(500).json({erro:error})
    }

}

export const destroy= async (req,res)=> {
    try {
        const localizacao= await Localizacao.findByIdAndDelete(req.params.id).exec()
        return res.status(204).json(localizacao)
    }catch (error){
        return res.status(500).json({erro:error})
    }
}