const fs = require('fs')
console.log(fs)
// fs.readFile('indeex.html', 'utf-8', (request, resolve) => {
//   if (request) {
//     throw request
//   }
//   console.log(resolve)
// })

// fs.rename('index.html', 'main.html', (request, resolve) => {
//   if (request) {
//     throw request
//   }
//   console.log('Nombre cambiado con exito')
// })

// fs.appendFile('index.html', '<p>Nuevo elemto </p>', (error) => {
//   if (error) {
//     throw error
//   }
//   console.log('Archivo actualizado con exito')
// })

// fs.writeFile('index.html', 'Contenido nuevo', (error) => {
//   if (error) {
//     throw error
//   }
//   console.log('Archivo remplasado correctamente')
// })

fs.unlink('main.html', (error) => {
  if (error) {
    throw error
  }
  console.log('archivo main eliminado')
})
