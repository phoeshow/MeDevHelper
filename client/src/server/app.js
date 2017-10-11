var http = require('http')
var express = require('express')
var path = require('path')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var cors = require('cors')

var index = require('./routes/index')
var api = require('./routes/api')

class Server {
  constructor (port = 3000) {
    var app = express()

    // view engine setup
    app.set('views', path.join(__dirname, 'views'))
    app.set('view engine', 'jade')

    app.use(logger('dev'))
    app.use(cors())
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(cookieParser())
    app.use(express.static(path.join(__dirname, 'public')))

    app.use('/', index)
    app.use('/api', api)

    // catch 404 and forward to error handler
    app.use(function (req, res, next) {
      var err = new Error('Not Found')
      err.status = 404
      next(err)
    })

    // error handler
    app.use(function (err, req, res, next) {
      // set locals, only providing error in development
      res.locals.message = err.message
      res.locals.error = err

      res.status(err.status || 500)
      res.send({
        message: res.locals.message,
        error: res.locals.error
      })
    })
    this.server = http.createServer(app).on('connection', socket => {
      socket.setTimeout(500)
    }).listen(port)
    return this.server
  }
}

export default Server
