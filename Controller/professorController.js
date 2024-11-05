import Professor from '../models/modelProfessor.js'

export const store = async (req, res)=> {
    try {
        const professor= await Professor.create(req.body)
        return res.status(201).json(professor)
    }catch (error) {
        return res.status(500).json({erro:error})
    }
}
export const index = async (req,res)=> {
    try {
        const professores= await Professor.find().exec()
        return res.status(200).json(professores)
    }catch (error){
        return res.status(500).json({erro:error})
    }
}

export const update= async (req,res)=> {
    try {
        const professor= await Professor.findByIdAndUpdate(req.params.id, req.body).exec()
        return res.status(200).json(professor)
    }catch (error){
        return res.status(500).json({erro:error})
    }

}

export const destroy= async (req,res)=> {
    try {
        const professor= await Professor.findByIdAndDelete(req.params.id).exec()
        return res.status(204).json(professor)
    }catch (error){
        return res.status(500).json({erro:error})
    }
}