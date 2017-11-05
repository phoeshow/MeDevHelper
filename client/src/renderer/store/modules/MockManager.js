import db from '../../../modules/db'
const state = {
  projectList: [],
  apiList: [],
  currentProject: {}
}

const mutations = {
  GET_PROJECT_LSIT (state, list) {
    state.projectList = list
  },
  CLEAR_PROJECT_LIST (state) {
    state.projectList.splice(0, state.projectList.length)
  },
  ADD_PROJECT (state, item) {
    state.projectList.push(item)
  },
  DELETE_PROJECT (state, item) {
    // find item in state an delete it.
  },
  SET_CURRENT_PROJECT (state, item) {
    state.currentProject = item
  },
  ADD_API (state, newApi) {
    state.apiList.unshift(newApi)
  },
  GET_API_LISTS (state, apiList) {
    state.apiList = apiList
  },
  SET_API_NAME (state, payment) {
    state.apiList[payment.index].name = payment.value
  },
  SET_API_CODE (state, payment) {
    state.apiList[payment.index].code = payment.value
  },
  SET_API_API (state, payment) {
    state.apiList[payment.index].api = payment.value
  },
  SET_API_METHOD (state, payment) {
    state.apiList[payment.index].method = payment.value
  },
  SET_API_DESCRIPTION (state, payment) {
    state.apiList[payment.index].description = payment.value
  },
  UPDATE_API (state, payment) {
    state.apiList.splice(payment.index, 1, payment.api)
  },
  DELETE_API (state, index) {
    // 从指定位置删除一个元素
    state.apiList.splice(index, 1)
  }
}

const actions = {
  addProject ({commit}, item) {
    // Add new project into db,then push new item in state.
    let doc = Object.assign(item, {
      createTime: Date.now(),
      updateTime: ''
    })
    db.projects.insert(doc, (err, newDoc) => {
      if (err) throw err
      commit('ADD_PROJECT', newDoc)
    })
  },
  deleteProjectById ({commit, dispatch}, projectId) {
    // TODO: delete one project from db,and delete all configures from this project
    db.projects.remove({_id: projectId}, {multi: true}, (err, numberRemoved) => {
      if (err) throw err
      // success remove project
      db.apis.remove({project: projectId}, {multi: true}, (err) => {
        if (err) throw err
        dispatch('getProjectList')
      })
    })
  },
  getProjectList ({state, commit, dispatch}, list) {
    // get project list
    db.projects.find({}, (err, docs) => {
      if (err) throw err
      console.log(docs)
      commit('GET_PROJECT_LSIT', docs)
      if (Object.keys(state.currentProject).length === 0 && docs.length > 0) {
        commit('SET_CURRENT_PROJECT', docs[0])
        dispatch('getApis')
      }
    })
  },
  // 将用户选择设置为当前 项目
  setCurrentProject ({commit}, item) {
    commit('SET_CURRENT_PROJECT', item)
  },
  // 在当前项目中添加一个api设置
  addApi ({commit, state}) {
    let doc = {
      name: 'New API',
      description: '',
      api: '/',
      method: '',
      code: '',
      project: state.currentProject._id,
      createTime: Date.now(),
      updateTime: ''
    }
    db.apis.insert(doc, (err, newDoc) => {
      if (err) throw err
      commit('ADD_API', newDoc)
    })
  },
  // 获取当前项目下所有的api设置
  getApis ({commit, state}) {
    db.apis.find({project: state.currentProject._id}, (err, apiList) => {
      if (err) throw err
      commit('GET_API_LISTS', apiList)
    })
  },
  updateApi ({commit, state}, index) {
    let willSaveApiID = state.apiList[index]._id
    let willSaveApiObj = {
      name: state.apiList[index].name,
      api: state.apiList[index].api,
      method: state.apiList[index].method,
      description: state.apiList[index].description,
      code: state.apiList[index].code,
      updateTime: Date.now()
    }
    db.apis.update({_id: willSaveApiID}, {$set: willSaveApiObj}, {}, (err) => {
      if (err) throw err
      db.apis.find({_id: willSaveApiID}, (err, docs) => {
        if (err) throw err
        commit('UPDATE_API', {
          index: index,
          api: docs[0]
        })
      })
    })
  },
  deleteApi ({commit, state}, index) {
    // user want to delete this api
    let willRemoveApiID = state.apiList[index]._id
    db.apis.remove({_id: willRemoveApiID}, {multi: true}, (err, numberRemoved) => {
      if (err) throw err
      // deleted successfully
      commit('DELETE_API', index)
    })
  }
}

export default {
  state,
  mutations,
  actions
}
