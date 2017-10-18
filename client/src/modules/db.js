import Datastore from 'nedb'
const path = require('path')
// 根据当前平台获取到用户文件夹
function getUserHome () {
  return process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME']
}

const dbpath = process.env.NODE_ENV === 'development' ? __dirname : path.join(getUserHome(), '.memock/')
console.log(dbpath)
export default new Datastore({
  filename: `${dbpath}/mockdb.db`,
  autoload: true
})
