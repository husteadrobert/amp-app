<template>
  <div class="stream-widget">
    <div v-if="!!selectedSong.id" class="widget-display">
      <div class="viewport" :style="{backgroundColor: selectedBackgroundColor, border: setBorder}">
        <div class="viewport-inner">
          <section class="songImage">
            <div class="image">
              <img :src="selectedSong.imageUrl">
            </div>
          </section>
          <section class="songInfo" :style="{color: selectedFontColor}">
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
    },
    selectedBackgroundColor() {
      return this.$store.getters['client/backgroundColor']
    },
    selectedFontColor() {
      return this.$store.getters['client/fontColor']
    },
    selectedShowDiff() {
      return this.$store.getters['client/showDiff']
    },
    setBorder() {
      if (this.selectedBackgroundColor === "") {
        return "none"
      } else {
        return "1px solid rgb(175, 60, 171)"
      }
    }
  }
  
}
</script>

<style lang="less" scoped>
.stream-widget {
  height: 100%;
  .widget-display {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .viewport {
      width: 500px;
      height: 500px;
      .viewport-inner {
        width: 100%;
        height: 100%;
        .songImage {
          display: flex;
          justify-content: center;
          height: 70%;
          .image {
            align-self: flex-end;
            img {
              max-height: 335px;
              max-width: 475px;
            }
          }

        }
        .songInfo {
          display: block;
          padding: 10px 10px 10px 80px;
          height: 30%;
        }
      }
    }
  }
}
</style>