const state = {
  MockServerList: []
}

const mutations = {
  ADD_MOCK_SERVER (state, mockserver) {
    state.MockServerList.push(mockserver)
  }
}

const actions = {

}

export default {
  state,
  mutations,
  actions
}
