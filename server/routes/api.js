var express = require('express');
var router = express.Router();
var parseRequest = require('../modules/paerseRequst')
/* 对于所有传入的api请求进行处理 */
router.use('/', parseRequest,function(req, res, next) {
  res.send('hello')
});


module.exports = router;
