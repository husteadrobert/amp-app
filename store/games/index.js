import axios from "axios";

export const state = () => ({
  gameList: [],
  game: {}
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
  },
  editGame(vuexContext, editGame) {
    return axios.patch('https://amplify-a4c63-default-rtdb.firebaseio.com/games/' + editGame.id + '.json?auth=' + vuexContext.getters.getUserToken, editGame)
    .then((result) => {
      vuexContext.commit('initGame', editGame)
      const gameFromGameList = vuexContext.getters.gameList.filter((game) => game.gameId === editGame.id)[0]
      vuexContext.dispatch('editGameList', {...editGame, listId: gameFromGameList.id})
    })
    .catch(e => console.log(e))
  },
  editGameList(vuexContext, editGame) {
    const newData = {
      gameId: editGame.id,
      name: editGame.name,
      imageUrl: editGame.imageUrl
    }
    axios.patch('https://amplify-a4c63-default-rtdb.firebaseio.com/gamesInitList/' + editGame.listId + '.json?auth=' + vuexContext.getters.getUserToken, newData)
    .then((result) => console.log("Updated Init List"))
    .catch((e) => console.log(e))
  },
  async initGame(vuexContext, id) {
    await axios.get('https://amplify-a4c63-default-rtdb.firebaseio.com/games/' + id + '.json?auth=' + vuexContext.getters.getUserToken)
    .then((result) => {
      vuexContext.commit('initGame', { ...result.data, id: id})
      vuexContext.commit('initAlbums', vuexContext.getters.game)
    })
    .catch(e => console.log(e))
  },
  addAlbum(vuexContext, album) {
    return axios.post('https://amplify-a4c63-default-rtdb.firebaseio.com/games/' + vuexContext.getters.game.id + '/albums.json?auth=' + vuexContext.getters.getUserToken, album)
    .then((result) => {
      const newAlbum = {...album, id: result.data.name }
      vuexContext.commit('addAlbum', newAlbum)
    })
    .catch(e => console.log(error))
  },
  deleteAlbum(vuexContext, id) {
    return axios.delete('https://amplify-a4c63-default-rtdb.firebaseio.com/games/' + vuexContext.getters.game.id + '/albums/' + id + '.json?auth=' + vuexContext.getters.getUserToken)
    .then((result) => {
      vuexContext.commit('deleteAlbum', id)
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
  },
  initGame(state, game) {
    state.game = game
  },
  initAlbums(state, game) {
    const albumList = []
    for (const key in state.game.albums) {
      albumList.push({...state.game.albums[key], id: key})
    }
    state.game.albums = albumList
  },
  addAlbum(state, album) {
    state.game.albums.push(album)
  },
  deleteAlbum(state, id) {
    state.game.albums = state.game.albums.filter((album) => album.id !== id)
  }
}

export const getters = {
  getUserToken(_,__,___,rootGetters) {
    return rootGetters['authentication/userToken']
  },
  gameList(state) {
    return state.gameList
  },
  game(state) {
    return state.game
  }
}
