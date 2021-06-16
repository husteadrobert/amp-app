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
              <marquee-text v-if="selectedSong.name.length + selectedAlbum.length > 30" :repeat="10" :duration="25">
                <h2>{{ selectedSong.name }}</h2>
                <h3>{{ selectedAlbum }}</h3>
              </marquee-text>
              <div v-else>
                <h2>{{ selectedSong.name }}</h2>
                <h3>{{ selectedAlbum }}</h3>
              </div>
            </div>
            <div v-if="selectedShowDiff" class="difficultyImage">
              <DifficultyWidget :gameName="gameName" :difficultyName="selectedDifficultyName" :difficultyLevel="selectedDifficultyLevel" />
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DifficultyWidget from '@/components/UI/DifficultyWidget'

export default {
   components: {
    DifficultyWidget
  },
  props: {
    gameName: {
      type: String,
      required: false
    }
  },
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
    selectedAlbum() {
      return this.$store.getters['client/selectedAlbum']
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
          padding: 10px;
          height: 30%;
          .info {
            padding-left: 70px;
            h2{
              font-size: 2.3em;
              display: inline;
            }
            h3{
              display: inline;
              margin-right: 10px;
            }
          }
        }
      }
    }
  }
}
</style>