export const state = () => ({
  playStyle: '',
  selectedSong: {},
  selectedDifficultyName: '',
  selectedDifficultyLevel: '',
  backgroundColor: '#000000',
  fontColor: '#FFFFFF',
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
    console.log(data)
    vuexContext.commit('setSong', data)
  },
  setPlayStyle(vuexContext, data) {
    vuexContext.commit('setPlayStyle', data)
    if (!!vuexContext.state.selectedSong.id) {
      const stateSong = vuexContext.state.selectedSong
      vuexContext.dispatch('setSong', {song: stateSong})
    }
  },
  setBackgroundColor(vuexContext, data) {
    vuexContext.commit('setBackgroundColor', data)
  },
  setFontColor(vuexContext, data) {
    vuexContext.commit('setFontColor', data)
  },
  setShowDiff(vuexContext, data) {
    vuexContext.commit('setShowDiff', data)
  },
  resetClientState(vuexContext) {
    vuexContext.commit('resetClientState')
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
  setFontColor(state, data) {
    state.fontColor = data
  },
  setShowDiff(state, data) {
    state.showDiff = data
  },
  resetClientState(state) {
    state.playStyle = ''
    state.selectedSong = {}
    state.selectedDifficultyName = ''
    state.selectedDifficultyLevel = ''
    state.backgroundColor = '#000000'
    state.fontColor = '#FFFFFF'
    state.showDiff = true

  }
}

export const getters = {
  playStyle(state) {
    return state.playStyle
  },
  selectedSong(state) {
    return state.selectedSong
  },
  selectedDifficultyLevel(state) {
    return state.selectedDifficultyLevel
  },
  selectedDifficultyName(state) {
    return state.selectedDifficultyName
  },
  backgroundColor(state) {
    return state.backgroundColor
  },
  fontColor(state) {
    return state.fontColor
  },
  showDiff(state) {
    return state.showDiff
  }
}