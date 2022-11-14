import express from 'express'
export const routerRoot = express.Router()
routerRoot.get('/', (req, res) => {
  res.send('Mi primer servidor con express')
})
// export default routerRoot
