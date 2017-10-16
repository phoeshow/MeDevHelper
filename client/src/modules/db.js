import Datastore from 'nedb'
const app = require('electron').remote.app
const dbpath = process.env.NODE_ENV === 'development' ? __dirname : app.getAppPath()
console.log(dbpath)
export default new Datastore({
  filename: `${dbpath}/mockdb.db`,
  autoload: true
})
