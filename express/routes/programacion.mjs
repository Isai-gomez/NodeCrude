import express, { json } from 'express'
import { infocursos } from '../data/cursos.mjs'
const { programacion } = infocursos

export const routeProgramacion = express.Router()
routeProgramacion.use(express.json())
routeProgramacion.get('/', (req, res) => {
  res.send(programacion)
})

routeProgramacion.get('/:lenguaje', (req, res) => {
  const lenguaje = req.params.lenguaje
  const result = programacion.filter((curso) => curso.lenguaje === lenguaje)

  if (result.length && req.query.ordenar === 'vista') {
    return res.send(result.sort((a, b) => a.vistas - b.vistas))
  }
  if (lenguaje.length) {
    return res.send(result)
  }
  return res.send(
    `Ningun lenguaje de ${lenguaje} no podemos ordenar con ${req.query.ordenar}`,
  )
})
routeProgramacion.get('/:lenguaje/:nivel', (req, res) => {
  const { lenguaje, nivel } = req.params
  const result = programacion.filter(
    (curso) => curso.lenguaje === lenguaje && curso.nivel === nivel,
  )

  return result.length
    ? res.send(JSON.stringify(result))
    : res.send(`Ningun lenguaje de ${lenguaje} de nivel ${nivel}`)
})

routeProgramacion.post('/', (req, res) => {
  const newCourse = req.body
  programacion.push(newCourse)
  res.send(JSON.stringify(programacion))
})
routeProgramacion.put('/:id', (req, res) => {
  const editCourse = req.body
  const { id } = req.params

  const indexCourse = programacion.findIndex((course) => course.id == id)

  if (indexCourse >= 0) {
    programacion[indexCourse] = editCourse
    return res.json(programacion)
  }
  return res.send('NO modificamos nada')
})

routeProgramacion.patch('/:id', (req, res) => {
  const editPropertyCourse = req.body
  const { id } = req.params
  const indexCourse = programacion.findIndex((course) => course.id == id)
  if (indexCourse >= 0) {
    const cursosAModificar = programacion[indexCourse]
    Object.assign(cursosAModificar, editPropertyCourse)
    return res.json(JSON.stringify(programacion))
  }
})

routeProgramacion.delete('/:id', (req, res) => {
  const { id } = req.params
  const indexCourse = programacion.findIndex((course) => course.id == id)
  if (indexCourse >= 0) {
    programacion.splice(indexCourse, 1)
    return res.json(programacion)
  }
  res.statusCode = 400
  return res.json('Elemento no encotrado')
})
