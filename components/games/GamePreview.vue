<template>
  <div class="game-preview">
    <nuxt-link :to="gameLink">
      {{ game.name }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    game: {
      type: Object,
      required: true
    }
  },
  computed: {
    gameLink() {
      return '/admin/games/' + this.game.id
    }
  }
}
</script>

<style lang="less" scoped>

</style>