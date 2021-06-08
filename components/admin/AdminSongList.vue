<template>
  <div class="song-list">
    Song list here
    <nuxt-link :to="newSongUrl">New Songs</nuxt-link>
    <ul>
      <li v-for="song in orderedSongs(song)" :key="song.id">
        <nuxt-link :to="editSongUrl(song)">
          {{ song.name }} - {{ albumName(song) }}
        </nuxt-link>
      </li>
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
  data() {
    return {
      song: ''
    }
  },
  methods: {
    albumName(song) {
      return this.albums.filter((album) => album.id === song.selectedAlbum)[0].name
    },
    orderedSongs() {
      // order songs this.songs.filter....
      return this.songs
    },
    editSongUrl(song) {
      return "/admin/games/" + this.$store.getters['games/game'].id + "/songs/" + song.id + "/edit-song"
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