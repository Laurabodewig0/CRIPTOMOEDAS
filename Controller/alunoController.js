import Aluno from '../models/modelAluno.js'

export const store = async (req, res)=> {
    try {
        const aluno= await Aluno.create(req.body)
        return res.status(201).json(aluno)
    }catch (error) {
        return res.status(500).json({erro:error})
    }
}
export const index = async (req,res)=> {
    try {
        const alunos= await Aluno.find().exec()
        return res.status(200).json(alunos)
    }catch (error){
        return res.status(500).json({erro:error})
    }
}

export const update= async (req,res)=> {
    try {
        const aluno= await Aluno.findByIdAndUpdate(req.params.id, req.body).exec()
        return res.status(200).json(aluno)
    }catch (error){
        return res.status(500).json({erro:error})
    }

}

export const destroy= async (req,res)=> {
    try {
        const aluno= await Aluno.findByIdAndDelete(req.params.id).exec()
        return res.status(204).json(aluno)
    }catch (error){
        return res.status(500).json({erro:error})
    }
}
