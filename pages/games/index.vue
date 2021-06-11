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
  }
}
</script>

<style lang="less" scoped>
.games-index {
  padding: 10px 20px;
}

</style>