import Humor from '../models/modelHumor.js'

export const store = async (req, res)=> {
    try {
        const humor= await Humor.create(req.body)
        return res.status(201).json(humor)
    }catch (error) {
        return res.status(500).json({erro:error})
    }
}
export const index = async (req,res)=> {
    try {
        const humor= await Humor.find().exec()
        return res.status(200).json(humor)
    }catch (error){
        return res.status(500).json({erro:error})
    }
}

export const update= async (req,res)=> {
    try {
        const humor= await Humor.findByIdAndUpdate(req.params.id, req.body).exec()
        return res.status(200).json(humor)
    }catch (error){
        return res.status(500).json({erro:error})
    }

}

export const destroy= async (req,res)=> {
    try {
        const humor= await Humor.findByIdAndDelete(req.params.id).exec()
        return res.status(204).json(humor)
    }catch (error){
        return res.status(500).json({erro:error})
    }
}