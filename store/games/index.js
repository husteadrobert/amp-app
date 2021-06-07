import axios from "axios";

export const state = () => ({
  gameList: []
})

export const actions = {
  initGames(vuexContext) {
    return axios.get('https://amplify-a4c63-default-rtdb.firebaseio.com/gamesInitList.json')
    .then(res => {
      const gamesArray = []
      for (const key in res.data) {
        gamesArray.push({...res.data[key], id: key})
      }
      vuexContext.commit('setGames', gamesArray)
    })
    .catch(e => console.log(e))
  },
  addGame(vuexContext, newGame) {
    return axios.post('https://amplify-a4c63-default-rtdb.firebaseio.com/games.json?auth=' + vuexContext.getters.getUserToken, newGame)
    .then((result) => {
      vuexContext.commit('addGame', {...newGame, id: result.data.name})
      vuexContext.dispatch('addGameToInitList', {...newGame, gameId: result.data.name})
    })
    .catch(e => console.log(e))
  },
  async addGameToInitList(vuexContext, newGame) {
    await axios.post('https://amplify-a4c63-default-rtdb.firebaseio.com/gamesInitList.json?auth=' + vuexContext.getters.getUserToken, newGame)
    .then((result) => {
      console.log("Added to InitList")
    })
    .catch(e => console.log(e))
  }
}

export const mutations = {
  setGames(state, games) {
    state.gameList = games
  },
  addGame(state, game) {
    state.gameList.push(game)
  }
}

export const getters = {
  getUserToken(_,__,___,rootGetters) {
    return rootGetters['authentication/userToken']
  },
  gameList(state) {
    return state.gameList
  }
}
