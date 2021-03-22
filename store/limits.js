export const state = () => ({
  limits: null,
})

export const mutations = {
  SET_LIMITS (state, payload) {
    state.limits = payload
  },
}

export const getters = {
  getLimits: state => state.limits,
}

export const actions = {
  setLimits (context, payload) {
    context.commit('SET_LIMITS', payload)
  },
}
