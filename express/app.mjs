import express from 'express'
import { routerMatematicas } from './routes/matematicas.mjs'
import { routeProgramacion } from './routes/programacion.mjs'
import { routerRoot } from './routes/index.mjs'
const app = express()

app.use('/api/cursos/programacion', routeProgramacion)
app.use('/api/cursos/matematicas', routerMatematicas)
app.use('/api', routerRoot)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`El servidor expres esta corriendo en http://localhot:${PORT}`)
})
