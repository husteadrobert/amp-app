<template>
  <div class="stream-widget">
    Main Streaming Wiget
    <div v-if="!!selectedSong.id" class="widget-display">
      <div class="viewport">
        <div class="viewport-inner">
          <section class="songImage">
            <div class="image">
              <img :src="selectedSong.imageUrl">
            </div>
          </section>
          <section class="songInfo">
            <div class="info">
              <h2>{{ selectedSong.name }}</h2>
              <h3>{{ selectedPlayStyle }} - {{ selectedDifficultyName }} - {{ selectedDifficultyLevel }}</h3>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    selectedSong() {
      return this.$store.getters['client/selectedSong']
    },
    selectedDifficultyLevel() {
      return this.$store.getters['client/selectedDifficultyLevel']
    },
    selectedDifficultyName() {
      return this.$store.getters['client/selectedDifficultyName']
    },
    selectedPlayStyle() {
      return this.$store.getters['client/playStyle']
    }
  }
  
}
</script>

<style lang="less" scoped>
.stream-widget {
  height: 100%;
  .widget-display {
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    .viewport {
      width: 475px;
      height: 475px;
      .viewport-inner {
        width: 100%;
        height: 100%;
        .songImage {
          display: block;
          height: 70%;
          background-color: black;
          img {
            max-height: 475px;
            max-width: 475px;
          }
        }
        .songInfo {
          display: block;
          padding: 10px;
          height: 30%;
          background-color:lime;
        }
      }
    }
  }
}
</style>