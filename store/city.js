export const state = () => ({
  selectedCity: null,
})

export const mutations = {
  SET_SELECTED_CITY (state, payload) {
    state.selectedCity = payload
  },
}

export const getters = {
  getSelectedCity: state => state.selectedCity,
}

export const actions = {
  setSelectedCity (context, payload) {
    context.commit('SET_SELECTED_CITY', payload)
  },
}
