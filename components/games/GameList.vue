<template>
  <div class="game-list">
    <ul>
      <li v-for="game in games" :key="game.id"><GamePreview :game="game" /></li>
    </ul>
  </div>
</template>

<script>
import GamePreview from "@/components/games/GamePreview"

export default {
  components: {
    GamePreview
  },
  props: {
    games: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="less" scoped>

</style>