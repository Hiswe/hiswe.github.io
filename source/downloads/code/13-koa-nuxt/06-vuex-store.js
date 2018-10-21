export const state = () => ({
  validation: {},
})

export const UPDATE_VALIDATION = `UPDATE_VALIDATION`

export const mutations = {
  [UPDATE_VALIDATION](state, payload) {
    state.validation = payload
  },
}

export const actions = {
  nuxtServerInit({ commit }, nuxtCtx) {
    const { req } = nuxtCtx
    const { serverData } = req

    if (!serverData) return
    if (serverData.validation) {
      commit(UPDATE_VALIDATION, serverData.validation)
    }
  },
}
