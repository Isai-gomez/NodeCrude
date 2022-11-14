const ordenarProducto = (producto) => {
  return new Promise((resolve, reject) => {
    console.log(`Ordenando producto ${producto} de freeCodeCamp`)
    setTimeout(() => {
      if (producto === 'taza') {
        resolve(`Ordenando una ${producto} de freecodeCamp ....`)
      } else {
        reject(`No disponible ${producto} no esta disponible`)
      }
    }, 2000)
  })
}

const procesarPedido = (respuesta) => {
  return new Promise((resolve) => {
    console.log('Procesando respuesta de compra')
    console.log(`La respuesta fue "${respuesta}"`)
    setTimeout(() => {
      resolve('Gracias por tu compra disfruta el producto de freeCodeCamp')
    }, 4000)
  })
}
const compraProducto = async (producto) => {
  try {
    const ordenar = await ordenarProducto(producto)
    console.log(`Ordenando  ${producto}`)
    console.log(ordenar)
    const procesar = await procesarPedido(ordenar)
    console.log(`Procesando ${producto}`)
    console.log(procesar)
  } catch (error) {
    throw error
  }
}
compraProducto('tapiz')
// ordenarProducto('taza')
//   .then((respuesta) => {
//     console.log('Respuesta recibida con exito')
//     console.log(respuesta)
//     return procesarPedido(respuesta)
//   })
//   .then((respueataProcesada) => {
//     console.log(respueataProcesada)
//   })
//   .catch((error) => {
//     throw error
//   })
