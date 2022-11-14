const statusPizza = () => {
  return Math.random() > 0.8
}
const miPedidoPizza = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (statusPizza()) {
      resolve('¡Pedido exitoso! Su pizza esta en camino')
    } else {
      reject('Ocurrio un error, intentelo de nuevo')
    }
  }, 300)
})

// miPedidoPizza.then(
//   (pedido) => {
//     console.log(pedido)
//   },
//   (pedidoError) => {
//     console.log(pedidoError)
//   },
// )

miPedidoPizza
  .then((messageConfirmation) => {
    console.log(messageConfirmation)
  })
  .catch((messageError) => {
    console.log(messageError)
  })
