<template>
  <div class="game-preview">
    {{ game.name }}
  </div>
</template>

<script>
export default {
  props: {
    game: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="less" scoped>

</style>