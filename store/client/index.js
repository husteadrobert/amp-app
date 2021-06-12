export const state = () => ({
  playStyle: '',
  selectedSong: {},
  selectedDifficultyName: '',
  selectedDifficultyLevel: '',
  backgroundColor: '',
  showDiff: true
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
  },
  setPlayStyle(vuexContext, data) {
    vuexContext.commit('setPlayStyle', data)
  },
  setBackgroundColor(vuexContext, data) {
    vuexContext.commit('setBackgroundColor', data)
  },
  setShowDiff(vuexContext, data) {
    vuexContext.commit('setShowDiff', data)
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
  },
  setPlayStyle(state, data) {
    state.playStyle = data
  },
  setBackgroundColor(state, data) {
    state.backgroundColor = data
  },
  setShowDiff(state, data) {
    state.showDiff = data
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
  backgroundColor(state) {
    return state.backgroundColor
  },
  showDiff(state) {
    return state.showDiff
  }
}