<template>
  <div>
    Game Page with ID {{ this.$route.params.gameId }} - {{ game.name }}
    <nuxt-link :to="`/admin/games/${this.$route.params.gameId}/edit`">Edit</nuxt-link>
    <AdminAlbumList  :albums="game.albums"/>
  </div>
</template>

<script>
import AdminAlbumList from "@/components/admin/AdminAlbumList"

export default {
  components: {
    AdminAlbumList
  },
  async asyncData(context) {
    await context.store.dispatch('games/initGame', context.params.gameId)
  },
  layout: 'admin',
  middleware: ['check-auth'],
  beforeMount() {
    if (this.$route.params.gameId !== this.game.id) {
      this.$store.dispatch('games/initGame', this.$route.params.gameId)
    }
  },
  computed: {
    game() {
      return this.$store.getters['games/game']
    }
  }
}
</script>