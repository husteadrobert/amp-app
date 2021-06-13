<template>
  <div class="game-preview">
    <nuxt-link :to="gameLink">
      <div class="preview-wrapper">
        <section class="image">
          <img :src="game.imageUrl">
        </section>
        <section class="info">
          <div class="name">
              {{ game.name }}
          </div>
        </section>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    game: {
      type: Object,
      required: true
    },
    isAdmin: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    gameLink() {
      if (this.isAdmin) {
        return '/admin/games/' + this.game.gameId
      } else {
        return '/games/' + this.game.gameId
      }
    }
  }
}
</script>

<style lang="less" scoped>
.game-preview {
  border: 1px solid black;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.2);
  :hover {
    background-color: rgb(175, 60, 171);
    border-radius: 10px;
  }
  a {
    text-decoration: none;
    color: #ffffff;
    font-weight: bold;

  }
  .preview-wrapper {
    width: 275px;
    height: 275px;
    padding: 10px;
    .image {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;
      img {
        max-width: 250px;
        max-height: 200px;
        border-radius: 5px;
      }
    }
    .info {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>