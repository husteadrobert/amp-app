<template>
  <div class="game-container">
    <header>
      <nuxt-link to="/admin/games/new-game">New Game</nuxt-link>
      <h1>
        Game Index Page
      </h1>
    </header>
    <section class="list">
      <GameList :games="gameList" />
    </section>
  </div>
</template>

<script>
import GameList from "@/components/games/GameList"

export default {
  components: {
    GameList
  },
  layout: 'admin',
  middleware: ['check-auth'],
  computed: {
    gameList() {
      return this.$store.getters['games/gameList']
    }
  }
}
</script>

<style scoped lang="less">
</style>