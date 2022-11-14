import express from 'express'
import { infocursos } from '../data/cursos.mjs'
const { matematicas } = infocursos
export const routerMatematicas = express.Router()

routerMatematicas.get('/', (req, res) => {
  res.send(JSON.stringify(matematicas))
})
routerMatematicas.get('/:tema', (req, res) => {
  const { tema } = req.params
  const result = matematicas.filter((curso) => curso.tema === tema)

  return result.length
    ? res.send(JSON.stringify(result))
    : res.send(`Ningun lenguaje de ${tema}`)
})

// export default routerMatematicas
