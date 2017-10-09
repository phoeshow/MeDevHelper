var http = require('http')
var express = require('express')
var path = require('path')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')

var index = require('./routes/index')
var api = require('./routes/api')

class Server {
  constructor (port = 3000) {
    var app = express()

    // view engine setup
    app.set('views', path.join(__dirname, 'views'))
    app.set('view engine', 'jade')

    app.use(logger('dev'))
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
      res.locals.error = req.app.get('env') === 'development' ? err : {}

      // render the error page
      res.status(err.status || 500)
      res.send({
        message: res.locals.message,
        error: res.locals.error
      })
    })
    this.server = http.createServer(app).on('connection', socket => {
      socket.setTimeout(500)
    }).listen(port)
    this.port = port
    this.server.on('error', this.onError.bind(this))
    return this.server
  }
  /**
 * Event listener for HTTP server "error" event.
 */

  onError (error) {
    if (error.syscall !== 'listen') {
      throw error
    }
    var bind = typeof this.port === 'string'
      ? 'Pipe ' + this.port
      : 'Port ' + this.port

    // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges')
        throw new Error(bind + ' requires elevated privileges')
        // break
      case 'EADDRINUSE':
        console.error(bind + ' is already in use')
        throw new Error(bind + ' is already in use')
        // break
      default:
        throw error
    }
  }
}

export default Server
