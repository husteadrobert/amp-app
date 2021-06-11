<template>
  <div class="game-list">
    <ul>
      <li v-for="game in games" :key="game.gameId"><GamePreview :game="game" :isAdmin="isAdmin"/></li>
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
    },
    isAdmin: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="less" scoped>

</style>