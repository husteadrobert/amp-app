<template>
  <div class="games-container">
    <div class="games-show">
      Main Area for {{ game.name }}
    </div>
    <div class="games-sidebar">
      <ul class="album-list">
        <li v-for="album in game.albums" :key="album.id" class="gameAlbum">
          <GameAlbum
            :album="album"
            :songs="songsByAlbum[album.id]"
            :orderedDifficulties="orderedDifficulties"
          />
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import GameAlbum from '@/components/games/GameAlbum'

export default {
  components: {
    GameAlbum
  },
  data() {
    return {
      game: {},
      songsByAlbum: [],
      orderedDifficulties: []
    }
  },
  async fetch() {
    let result = await fetch('https://amplify-a4c63-default-rtdb.firebaseio.com/games/' + this.$route.params.gameId + '.json').then(res => res.json())
    this.$store.dispatch('client/initPlayStyle', result.playStyles[0].name)
    const keys = Object.keys(result.songs)
    keys.forEach((key) => {
      result.songs[key].id = key
    })
    const albumKeys = Object.keys(result.albums)
    albumKeys.forEach((key) => {
      result.albums[key].id = key
    })
    const diffKeys = Object.keys(result.difficulties).sort().map((entry) => {
      return result.difficulties[entry].name
    })

    console.log(result)
    this.game = result
    this.songsByAlbum = _.groupBy(result.songs, "selectedAlbum")
    this.orderedDifficulties = diffKeys
  },
}
</script>

<style lang="less" scoped>
.games-container {
  display: flex;
  height: 92.25vh;
  .games-show {
    background-color: blue;
    width: 65%;
  }
  .games-sidebar {
    padding: 15px;
    background-color: red;
    width: 35%;
    overflow: auto;
    .album-list {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      align-items: center;
      li.gameAlbum {
        width: 100%;
        margin-bottom: 10px;
      }
    }
  }
}

</style>