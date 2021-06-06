<template>
  <div class="game-container">
    <header>
      <nuxt-link to="/admin/games/new-game">New Game</nuxt-link>
      <h1>
        Game Index Page
      </h1>
    </header>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  middleware: ['check-auth']
}
</script>

<style scoped lang="less">
</style>