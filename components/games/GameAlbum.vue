<template>
  <div class="game-album">
    <section class="albumPlate" @click.prevent="onToggleAlbum">
      <h2>{{ name }}</h2>
      <div class="rightSide">
        <div v-if="toggleList" class="filterInput">
          <input type="search" placeholder="Search..." @click.stop v-model="filterText" />
          <button type="button" @click.stop="onToggleKanji" :class="filterKanji ? 'toggled' : ''">漢</button>
        </div>
        <h3>{{ songs.length }} Songs</h3>
      </div>
    </section>
    <section class="songList">
      <transition name="slide">
        <ul v-show="toggleList">
          <li v-for="song in filteredSongs" :key="song.id">
            <GameSong :song="song" :albums="albums" :isAllSongs="isAllSongs" :orderedDifficulties="orderedDifficulties" />
          </li>
        </ul>
      </transition>
    </section>
  </div>
</template>

<script>
import GameSong from '@/components/games/GameSong'

export default {
  components: {
    GameSong
  },
  props: {
    album: {
      type: Object,
      required: false
    },
    albums: {
      type: Object,
      required: false
    },
    songs: {
      type: Array,
      required: true
    },
    orderedDifficulties: {
      type: Array,
      required: true
    },
    isAllSongs: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      toggleList: false,
      name: !!this.album ? this.album.name : "All Songs",
      filterText: '',
      filterKanji: false
    }
  },
  methods: {
    onToggleAlbum() {
      this.toggleList = !this.toggleList
      this.filterText = ''
      this.filterKanji = false
    },
    onToggleKanji() {
      this.filterKanji = !this.filterKanji
    },
  },
  computed: {
    filteredSongs() {
      let filteredSongList = this.songs
      if (this.filterKanji) {
        filteredSongList = filteredSongList.filter((song) => {
          return song.name.search(new RegExp(/[一-龠]+|[ぁ-ゔ]+|[ァ-ヴー]/u, 'i')) !== -1
        })
      }
      if (this.filterText) {
        filteredSongList = filteredSongList.filter((song) => {
          return song.name.search(new RegExp(this.filterText, 'i')) !== -1
        })
      }
      return filteredSongList
    },
  }
}
</script>

<style lang="less" scoped>
.game-album {
  .albumPlate {
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(241,190,82,1) 0%, rgba(0,0,0,1) 100%);
    border: 1px solid gold;
    padding: 10px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    border-radius: 10px;
    margin-bottom: 10px;
    .rightSide {
      display: flex;
      justify-content: center;
      align-items: center;
      .filterInput {
        display: inline-block;
        input {
          width: 100px;
          padding: 3px;
        }
        button {
          background-color: #efc35e;
          padding: 0 5px;
          height: 25px;
          &.toggled {
            background-color: rgb(56, 49, 9);
          }
        }
      }
      h3 {
      color:#efc35e;
      display: inline-block;
      margin-left: 5px;
      }
    }

  }
  .songList {
    .slide-enter-active {
    transition-duration: 0.3s;
    transition-timing-function: linear;
    }

    .slide-leave-active {
    -moz-transition-duration: 0.3s;
    -webkit-transition-duration: 0.3s;
    -o-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    }

  .slide-enter-to, .slide-leave {
    max-height: 500px;
    opacity: 1;
    }

  .slide-enter, .slide-leave-to {
    overflow: hidden;
    max-height: 0;
    opacity: 0;
    }
  }
}

</style>