<template>
  <div class="edit-song">
    Edit Songs for - {{ $store.getters['games/game'].name }}
    <AdminSongForm @submit="onSubmit" :albums="albums" :is-edit="true" :song="editSong"/>
  </div>
</template>

<script>
import AdminSongForm from "@/components/admin/AdminSongForm"

export default {
  layout: 'admin',
  middleware: ['check-auth'],
  components: {
    AdminSongForm
  },
  layout: 'admin',
  middleware: ['check-auth'],
  computed: {
    albums() {
      return this.$store.getters['games/game'].albums
    },
    editSong() {
      return this.$store.getters['games/game'].songs.filter((song) => song.id === this.$route.params.songId)[0]
    }
  },
  methods: {
    onSubmit(payload) {
      this.$store.dispatch('games/editSong', payload)
      .then((result) => {
        this.$router.push(`/admin/games/${this.$route.params.gameId}`)
      })
      .catch(e => console.log(e))
    }
  }
}
</script>

<style lang="less" scoped>

</style>