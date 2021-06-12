export const state = () => ({
  playStyle: '',
  selectedSong: {},
  selectedDifficultyName: '',
  selectedDifficultyLevel: '',
})

export const actions = {
  onSelectSong(vuexContext, data) {
    vuexContext.commit('setSelectedSong', data.song)
    vuexContext.commit('setSelectedDifficulty', data.difficulty)
  },
  initPlayStyle(vuexContext, data) {
    vuexContext.commit('setPlayStyle', data)
  },
  initSelectedSong(vuexContext) {
    vuexContext.commit('initSelectedSong')
  },
  setSongAndDifficulty(vuexContext, data) {
    vuexContext.commit('setSongAndDifficulty', data)
  },
  setSong(vuexContext, data) {
    vuexContext.commit('setSong', data)
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
  },
  setSongAndDifficulty(state, data) {
    state.selectedSong = data.song
    state.selectedDifficultyName = data.difficultyName
    state.selectedDifficultyLevel = data.difficultyLevel
  },
  setSong(state, data) {
    state.selectedSong = data.song
    state.selectedDifficultyName = ''
    state.selectedDifficultyLevel = ''
  },
  initSelectedSong(state) {
    state.selectedSong = {}
    state.selectedDifficultyName = '',
    state.selectedDifficultyLevel = ''
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
  },
}