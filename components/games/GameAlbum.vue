<template>
  <div class="game-album">
    <section class="albumPlate" @click.prevent="onToggleAlbum">
      <h2>{{ album.name }}</h2>
      <h3>{{ songs.length }} Songs</h3>
    </section>
    <section class="songList">
      <transition name="slide">
        <ul v-show="toggleList">
          <li v-for="song in songs" :key="song.id">
            <GameSong :song="song" :orderedDifficulties="orderedDifficulties" />
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
      default: 'all'
    },
    songs: {
      type: Array,
      required: false
    },
    orderedDifficulties: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      toggleList: false
    }
  },
  methods: {
    onToggleAlbum() {
      this.toggleList = !this.toggleList
    }
  }
}
</script>

<style lang="less" scoped>
.game-album {
  .albumPlate {
    border: 1px solid black;
    padding: 10px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    margin-bottom: 10px;
  }
  .songList {
    li {
      border: 1px solid green;
      margin-bottom: 10px;
    }
    .slide-enter-active {
    transition-duration: 0.2s;
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
    }

  .slide-enter, .slide-leave-to {
    overflow: hidden;
    max-height: 0;
    }
  }
}

</style>