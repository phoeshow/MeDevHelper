import Datastore from 'nedb'
import path from 'path'
import {remote} from 'electron'

const db = {
  projects: new Datastore(path.join(remote.app.getPath('userData'), 'projects.db')),
  apis: new Datastore(path.join(remote.app.getPath('userData'), 'apis.db'))
}

db.projects.loadDatabase()
db.apis.loadDatabase()

export default db
