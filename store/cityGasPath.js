export const state = () => ({
  gds: null,
})

export const mutations = {
  SET_GAS_PATH (state, payload) {
    state.gds = payload
  },
}

export const getters = {
  getGasPath: state => state.gds,
  getOnlyPath: state => state.gds && state.gds.gtr,
}

export const actions = {
  setGasPath (context, payload) {
    context.commit('SET_GAS_PATH', payload)
  },
}
