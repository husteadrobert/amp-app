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
    h3 {
      color:#efc35e;
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