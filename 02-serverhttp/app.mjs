import http from 'http'
import { manegarSolicitudGet, manejarSolicitudPost } from './helpers/method.mjs'

const server = http.createServer((req, res) => {
  // TODO PROCESS
  const { method } = req

  const METHOD_ACCESSED = {
    GET: () => manegarSolicitudGet(req, res),
    POST: () => manejarSolicitudPost(req, res),
  }
  const METHOD_NO_ACCESSED = `Metodo ${method} no acectado por el servidor`

  if (METHOD_ACCESSED[method]) {
    METHOD_ACCESSED[method]()
  } else {
    res.statusCode = 501
    res.end(METHOD_NO_ACCESSED)
  }
})

const PUERTO = 3000
server.listen(PUERTO, () => {
  console.log(`El servidor esta esccuchando en http://localhost:${PUERTO} ....`)
})
