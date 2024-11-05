import Materia from '../models/modelMateria.js'

export const store = async (req, res)=> {
    try {
        const materia= await Materia.create(req.body)
        return res.status(201).json(materia)
    }catch (error) {
        return res.status(500).json({erro:error})
    }
}
export const index = async (req,res)=> {
    try {
        const materias= await Materia.find().exec()
        return res.status(200).json(materias)
    }catch (error){
        return res.status(500).json({erro:error})
    }
}

export const update= async (req,res)=> {
    try {
        const materia= await Materia.findByIdAndUpdate(req.params.id, req.body).exec()
        return res.status(200).json(materia)
    }catch (error){
        return res.status(500).json({erro:error})
    }

}

export const destroy= async (req,res)=> {
    try {
        const materia= await Materia.findByIdAndDelete(req.params.id).exec()
        return res.status(204).json(materia)
    }catch (error){
        return res.status(500).json({erro:error})
    }
}
