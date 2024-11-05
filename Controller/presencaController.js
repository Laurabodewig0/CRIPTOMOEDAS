import Presenca from '../models/modelPresenca.js'

export const store = async (req, res)=> {
    try {
        const presenca= await Presenca.create(req.body)
        return res.status(201).json(presenca)
    }catch (error) {
        return res.status(500).json({erro:error})
    }
}
export const index = async (req,res)=> {
    try {
        const presencas= await Presenca.find().exec()
        return res.status(200).json(presencas)
    }catch (error){
        return res.status(500).json({erro:error})
    }
}

export const update= async (req,res)=> {
    try {
        const presenca= await Presenca.findByIdAndUpdate(req.params.id, req.body).exec()
        return res.status(200).json(presenca)
    }catch (error){
        return res.status(500).json({erro:error})
    }

}

export const destroy= async (req,res)=> {
    try {
        const presenca= await Presenca.findByIdAndDelete(req.params.id).exec()
        return res.status(204).json(presenca)
    }catch (error){
        return res.status(500).json({erro:error})
    }
}