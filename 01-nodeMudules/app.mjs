import { greetName, greetStatic } from './greets.mjs'
const greetsSetInterlval = (name) => {
  console.log('----------')
  console.log(greetStatic())
  console.log('----------')
  console.log(greetName(name))
  console.log('----------')
}
setInterval(greetsSetInterlval, 3000, 'Carmela')
