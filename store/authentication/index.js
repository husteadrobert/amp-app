export const state = () => ({
  authUser: null
})

export const actions = {
  async onAuthStateChanged({ commit }, { authUser }) {
    if (!authUser) {
      commit('RESET_STORE')
      return
    }
    if (authUser && authUser.getIdToken) {
      try {
        const idToken = await authUser.getIdToken(true)
        console.log('HIER', idToken)
        console.log(this.$axios.defaults)
        this.$axios.defaults.headers.authorization = `Bearer ${idToken}`
      } catch (e) {
        console.error(e)
      }
    }
    commit('SET_AUTH_USER', { authUser })
  },
  async signIn(vuexContext, signInDetails) {
    return await this.$fire.auth.signInWithEmailAndPassword(signInDetails.email, signInDetails.password)
  },
  async signOut(vuexContext) {
    return await this.$fire.auth.signOut()
  }
}

export const mutations = {
  RESET_STORE: (state) => {
    state.authUser = null
  },

  SET_AUTH_USER: (state, { authUser }) => {
    state.authUser = {
      uid: authUser.uid,
      email: authUser.email
    }
  }
}

export const getters = {
  isAuthenticated(state) {
    return !!state.authUser
  },
  userEmail(state) {
    return state.authUser.email
  }
}