const express = require('express')
const router = express.Router()

router.use('/', (req, res, next) => {
  const path = req.path
  const method = req.method
  const query = req.query
  const body = req.body
  console.log(path, method, query, body)
  res.send('end')
})

module.exports = router
