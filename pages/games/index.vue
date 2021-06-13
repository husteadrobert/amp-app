<template>
  <div class="games-index">
    <GameList :games="games" />
  </div>
</template>

<script>
import GameList from '@/components/games/GameList'

export default {
  components: {
    GameList
  },
  computed: {
    games() {
      return this.$store.getters['games/gameList']
    }
  },
  mounted() {
    this.$store.dispatch('client/resetClientState')
  }
}
</script>

<style lang="less" scoped>
.games-index {
  height: 100vh;
  padding: 10px 20px;
  background-image: url('~@/assets/images/turntable.jpg');
  background-size: cover;
}

</style>