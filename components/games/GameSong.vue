<template>
  <div class="game-song">
    <section class="songInfo">
      <div class="songImage">
        <img :src="song.imageUrl">
      </div>
      <div class="songName">
        <h3>{{ song.name }}</h3>
      </div>
    </section>
    <section class="songDifficulties">
      <ul class="diffList">
        <li v-for="diff in orderedDifficulties" :key="song.name + '_' + diff">
          <DifficultyButton :songId="song.id" :difficultyName="diff" :difficultyLevel="song.difficulties[playStyle][diff]" />
        </li>
      </ul>
    </section>

  </div>
</template>

<script>
import DifficultyButton from '@/components/games/DifficultyButton'

export default {
  components: {
    DifficultyButton
  },
  props: {
    song: {
      type: Object,
      requierd: true
    },
    orderedDifficulties: {
      type: Array,
      required: true
    }
  },
  computed: {
    playStyle() {
      return this.$store.getters['client/playStyle']
    }
  }
}
</script>

<style lang="less" scoped>

.game-song {
  //display: flex;
  //justify-content: space-between;
  //align-items: center;
  height: 100px;
  //width: 100%;
  .songInfo {
    width: 100%;
    height: 100%;
    display: flex;
    .songImage {
      display: inline-block;
      margin: auto 5px auto 0;
      //margin-right: 5px;
      img {
        max-width: 100px;
      }
    }
    .songName {
      //display: inline-block;
      align-self: center;
      white-space: nowrap;
      overflow: hidden;
    }
  }
  .songDifficulties {
    //align-self: flex-end;
    margin-right: 10px;
    position: relative;
    ul {
      position: absolute;
      width: 300px;
      top: -25px;
      right: -30px;
      li {
        display: inline-block;
      }
    }
  }
}

</style>