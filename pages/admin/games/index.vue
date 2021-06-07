<template>
  <div class="game-container">
    <header>
      <nuxt-link to="/admin/games/new-game">New Game</nuxt-link>
      <h1>
        Game Index Page
      </h1>
    </header>
    <section class="game-list">
      <ul>
        <li v-for="game in gameList" :key="game.id">{{game.name}} - {{game.gameId}} - {{game.id}} - {{ game.imageUrl }}</li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
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