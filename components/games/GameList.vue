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
.game-list {
  padding: 10px 20px;
  ul {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    li {
      list-style: none;
      margin: 10px 15px;
    }
  }
}

</style>