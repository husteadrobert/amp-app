<template>
  <div class="song-list">
    Song list here
    <nuxt-link :to="newSongUrl">New Songs</nuxt-link>
    <ul>
      <li v-for="song in orderedSongs()" :key="song.id">{{ song.name }} - {{ albumName(song) }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    songs: {
      type: Array,
      required: false
    },
    albums: {
      type: Array,
      required: false
    },
  },
  methods: {
    albumName(song) {
      return this.albums.filter((album) => album.id === song.selectedAlbum)[0].name
    },
    orderedSongs() {
      // order songs this.songs.filter....
      return this.songs
    }
  },
  computed: {
    newSongUrl() {
      return "/admin/games/" + this.$store.getters['games/game'].id + "/new-song"
    },
  }
}
</script>

<style lang="less" scoped>

</style>