export const state = () => ({
  playStyle: '',
  selectedSong: '',
  selectdDifficulty: ''
})

export const actions = {
  onSelectSong(vuexContext, data) {
    vuexContext.commit('setSelectedSong', data.song)
    vuexContext.commit('setSelectedDifficulty', data.difficulty)
  },
  initPlayStyle(vuexContext, data) {
    vuexContext.commit('setPlayStyle', data)
  }
}

export const mutations = {
  setSelectedSong(state, song) {
    state.selectedSong = song
  },
  setSelectedDifficulty(state, diff) {
    state.selectedDifficulty = diff
  },
  setPlayStyle(state, style) {
    state.playStyle = style
  }
}

export const getters = {
  playStyle(state) {
    return state.playStyle
  },
  selectedSong(state) {
    return state.selectedSong
  },
  selectedDifficulty(state) {
    return state.selectedDificulty
  }
}