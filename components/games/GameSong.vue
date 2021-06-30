<template>
  <div class="game-song" @click="onSetSong">
    <section class="songInfo">
      <div class="songImage">
        <img :src="song.imageUrl">
      </div>
      <div class="songName">
        <h3 :class="{ allSongs: isAllSongs }">
          {{ song.name }}
        </h3>
        <h4 v-if="isAllSongs">{{ songAlbum }}</h4>
      </div>
    </section>
    <section class="songDifficulties">
      <ul class="diffList">
        <li v-for="diff in orderedDifficulties" :key="song.name + '_' + diff">
          <DifficultyButton :songId="song.id" :difficultyName="diff" :difficultyLevel="song.difficulties[playStyle][diff]" @onClickDifficulty="onClickDifficulty"/>
        </li>
      </ul>
    </section>

  </div>
</template>

<script>
import DifficultyButton from '@/components/games/DifficultyButton'

export default {
  components: {
    DifficultyButton
  },
  props: {
    song: {
      type: Object,
      requierd: true
    },
    orderedDifficulties: {
      type: Array,
      required: true
    },
    albums: {
      type: Object,
      required: false
    },
    isAllSongs: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onSetSong() {
      const data = {
        song: this.song,
        album: this.songAlbum
      }
      this.$store.dispatch('client/setSong', data)
    },
    onClickDifficulty(data) {
      const payload = {
        ...data,
        song: this.song,
        album: this.songAlbum
      }
      this.$store.dispatch('client/setSongAndDifficulty', payload)
    }
  },
  computed: {
    playStyle() {
      return this.$store.getters['client/playStyle']
    },
    songAlbum() {
      return this.albums[this.song.selectedAlbum].name
    }
  }
}
</script>

<style lang="less" scoped>

.game-song {
  height: 100px;
  border: 1px solid black;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  margin-bottom: 10px;
  .songInfo {
    width: 100%;
    height: 100%;
    display: flex;
    padding: 10px;
    cursor: pointer;
    .songImage {
      display: inline-block;
      margin: auto 10px auto 0;
      img {
        max-width: 80px;
      }
    }
    .songName {
      white-space: nowrap;
      overflow: hidden;
      font-size: 20px;
      h3 {
        margin-top: 15px;
        &.allSongs {
          margin-top: 5px;
        }
      }
      h4 {
        font-size: 12px;
      }
    }
  }
  .songDifficulties {
    margin-right: 10px;
    position: relative;
    ul {
      position: absolute;
      width: 360px;
      top: -30px;
      right: -30px;
      li {
        display: inline-block;
        margin-right: 10px;
        width: 75px;
      }
    }
  }
}
@media only screen and (max-width: 1200px) {
  .game-song {
    height: 100%;
    .songInfo {
      .songName {
        h3 {
          &.allSongs {
            margin-top: 15px;
          }
        }
      }
    }
    .songDifficulties {
      margin-right: 0;
      margin-bottom: 10px;
      position: initial;
      ul {
        position: initial;
        li {
          margin-right: 5px;
        }
      }
    }
  }
}
</style>