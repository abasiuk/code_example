export const state = () => ({
  searchMode: false,
  searchText: '',
})

export const mutations = {
  SET_SEARCH_MODE (state, payload) {
    state.searchMode = payload
  },
  SET_SEARCH_TEXT (state, payload) {
    state.searchText = payload
  },
}

export const getters = {
  isSearchMode: state => state.searchMode,
  getSearchText: state => state.searchText,
}

export const actions = {
  setSearchMode (context, payload) {
    context.commit('SET_SEARCH_MODE', payload)
  },
  setSearchText (context, payload) {
    context.commit('SET_SEARCH_TEXT', payload)
  },
}
