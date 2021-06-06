export const state = () => ({
  authUser: {
    uid: null,
    email: null,
    token: null
  }
})

export const actions = {
  async onAuthStateChanged({ commit }, { authUser }) {
    if (!authUser) {
      commit('RESET_STORE')
      return
    }
    let idToken = null
    if (authUser && authUser.getIdToken) {
      try {
        idToken = await authUser.getIdToken(true)
        console.log('HIER', idToken)
        console.log(this.$axios.defaults)
        this.$axios.defaults.headers.authorization = `Bearer ${idToken}`
      } catch (e) {
        console.error(e)
      }
    }
    commit('SET_AUTH_USER', { token: idToken, ...authUser })
  },
  signIn(vuexContext, signInDetails) {
    return this.$fire.auth.signInWithEmailAndPassword(signInDetails.email, signInDetails.password)
      .then((authUser) => {
        vuexContext.commit('SET_AUTH_USER', {authUser})
        return authUser
      })
  },
  signOut(vuexContext) {
    return this.$fire.auth.signOut()
      .then(() => {
        vuexContext.commit('RESET_STORE')
        return
      })
  },
  createPost(vuexContext) {
    const token = vuexContext.getters.userToken
    this.$axios.post('https://amplify-a4c63-default-rtdb.firebaseio.com/posts.json?auth=' + token, {name: "Test Post"})
    .then((result) => console.log(result))
    .catch((e) => console.log(e))
  }
}

export const mutations = {
  RESET_STORE: (state) => {
    state.authUser = {
      uid: null,
      email: null,
      token: null
    }
  },

  SET_AUTH_USER: (state, authUser) => {
    state.authUser = {
      uid: authUser.uid,
      email: authUser.email,
      token: authUser.token
    }
  }
}

export const getters = {
  isAuthenticated(state) {
    return !!state.authUser.email
  },
  userEmail(state) {
    return state.authUser.email
  },
  userToken(state) {
    return state.authUser.token
  }
}