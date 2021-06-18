<template>
  <div class="games-container">
    <div class="games-show">
      <div class="selected-song">
        <StreamWidget :gameName="game.name" />
      </div>
      <div class="game-options">
        <GameOption :playStyles="playStyles" />
      </div>
    </div>
    <div class="games-sidebar">
      <ul class="album-list">
        <li class="gameAlbum">
          <GameAlbum
            :songs="allSongs"
            :orderedDifficulties="orderedDifficulties"
            :albums="game.albums"
            :isAllSongs="true"
          />
        </li>
        <li v-for="album in game.albums" :key="album.id" class="gameAlbum">
          <GameAlbum
            :album="album"
            :songs="songsByAlbum[album.id]"
            :orderedDifficulties="orderedDifficulties"
            :albums="game.albums"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import GameAlbum from '@/components/games/GameAlbum'
import GameOption from '@/components/games/GameOption'
import StreamWidget from '@/components/UI/StreamWidget'

export default {
  components: {
    GameAlbum,
    GameOption,
    StreamWidget
  },
  data() {
    return {
      game: {},
      songsByAlbum: [],
      allSongs: [],
      orderedDifficulties: [],
      playStyles: []
    }
  },
  async fetch() {
    let result = await fetch('https://amplify-a4c63-default-rtdb.firebaseio.com/games/' + this.$route.params.gameId + '.json').then(res => res.json())
    this.$store.dispatch('client/initPlayStyle', result.playStyles[0].name)
    this.$store.dispatch('client/initSelectedSong')
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

    this.game = result
    this.songsByAlbum = _.groupBy(result.songs, "selectedAlbum")
    this.allSongs = _.flatten(Object.values(this.songsByAlbum))
    this.orderedDifficulties = diffKeys
    console.log(this.game)
    this.playStyles = result.playStyles
  },
}
</script>

<style lang="less" scoped>
.games-container {
  display: flex;
  height: 100vh;
  background-image: url('~@/assets/images/dials.jpg');
  background-size: cover;
  .games-show {
    width: 65%;
    .selected-song {
      height: 80%;
    }
    .game-options {
      background: rgba(255, 255, 255, 0.2);
      border-top: 1px solid rgb(175, 60, 171);
      height: 20%;
    }
  }
  .games-sidebar {
    padding: 15px;
    border-left: 1px solid rgb(175, 60, 171);
    width: 35%;
    overflow: auto;
    .album-list {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      align-items: center;
      width: 100%;
      li.gameAlbum {
        width: 98%;
        margin-bottom: 10px;
      }
    }
  }
}

</style>