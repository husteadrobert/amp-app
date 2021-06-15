<template>
  <div class="edit-game">
    Edit Game Screen - {{ game.name }}
    <AdminGameForm @submit="onSubmit" :game="game"/>
  </div>
</template>

<script>
import AdminGameForm from '@/components/admin/AdminGameForm'

export default {
  components: {
    AdminGameForm
  },
  layout: 'admin',
  middleware: ['check-auth'],
  methods: {
    onSubmit(payload) {
      this.$store.dispatch('games/editGame', payload)
      .then((result) => this.$router.push("/admin/games/" + payload.id))
      .catch(e => console.log(e))
    }
  },
  computed: {
    game() {
      return this.$store.getters['games/game']
    }
  }
}
</script>

<style lang="less" scoped>
.edit-game {
  background-color: white;
  overflow-y: scroll;
}

</style>