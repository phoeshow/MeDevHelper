const url = require('url')

function parseRequest (req,res,next) {
  let urlObj = url.parse(req.url)
  let parsedReq = {}
  console.log(urlObj)
  next()
}

module.exports = parseRequest