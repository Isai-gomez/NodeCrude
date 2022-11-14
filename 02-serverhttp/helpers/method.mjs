import { infocursos } from '../data/cursos.mjs'
const { programacion, matematicas } = infocursos

export const manejarSolicitudPost = (req, res) => {
  const path = req.url
  const method = req.method
  if (path === '/cursos/add/programacion') {
    let body = ''
    req.on('data', (contenido) => {
      body += contenido.toString()
    })
    req.on('end', () => {
      console.log(body)
      console.log(typeof body)
      body = JSON.parse(body)
      console.log(typeof body)
      return res.end(
        `El servidor recibio una solicitud POST en http://localhos:300${path}`,
      )
    })
  } else {
    res.statuCode = 404
    return res.end(
      `Ruta http://localhost:${path} no soportada por en navegador sorry error methodo ${method}`,
    )
  }
}

export const manegarSolicitudGet = (req, res) => {
  const path = req.url
  const urlList = {
    '/': 'Bienvenido a mi primer servidor creado con node js',
    '/cursos': JSON.stringify(infocursos),
    '/cursos/programacion': JSON.stringify(programacion),
    '/cursos/matematicas': JSON.stringify(matematicas),
  }

  return urlList[path]
    ? res.end(urlList[path])
    : res.end(
        `Ruta http://localhost:${path} no soportada por en navegador sorry `,
      )
}
