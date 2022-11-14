const EventEmitter = require('events')
const emisordeEvente = new EventEmitter()
emisordeEvente.on('compra', (total, product) => {
  console.log(`Se realizon una compra de $${total}`)
  console.log(`Numro de producto ${product}`)
})
emisordeEvente.emit('compra', 500, 5)
