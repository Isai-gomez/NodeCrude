const statusPromise = false
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (statusPromise) {
      resolve('Promesa cumplida con exito')
    } else {
      reject('Promesa no cumplida sorry')
    }
  }, 3000)
})

myPromise.then(
  (valor) => {
    console.log(valor)
  },
  (error) => {
    console.log(error)
  },
)
