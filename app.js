import express from 'express'
import connectDB from './config/db.js'
import routerPresenca from './routers/routerPresenca.js'
import routerHumor from './routers/routerHumor.js'
import routerAluno from './routers/routerAluno.js'
import routerProfessor from './router/routerProfessor.js'
import routerLocalizacao from './router/routerLocalizacao.js'
import routerMateria from './router/routerMateria.js'
connectDB()

const app= express()
app.use(express.json())
app.use('/presenca', routerPresenca)
app.use ('/humor', routerHumor)
app.use ('/aluno', routerAluno)
app.use ('/professor', routerProfessor)
app.use ('/localizacao', routerLocalizacao)
app.use ('/materia', routerMateria)

app.listen (3000, ()=> console.log ('example app listening on port 3000'))