<template>
  <div class="difficulty-widget">
    <div v-if="gameName === 'DJMAX RESPECT V'" class="djmax-diff">
      <div v-if="difficultyLevel" class="djmax-wrapper">
        <div v-for="num in 5" :key="'yellow_' + num" class="djmax-star yellow">
          <img v-if="num <= difficultyLevel" src="@/assets/images/djmax/yellowstar.png">
          <img v-else src="@/assets/images/djmax/blackstar.png">
        </div>
        <div v-for="num in 5" :key="'orange_' + num" class="djmax-star">
          <img v-if="num + 5 <= difficultyLevel" src="@/assets/images/djmax/orangestar.png">
          <img v-else src="@/assets/images/djmax/blackstar.png">
        </div>
        <div v-for="num in 5" :key="'purple_' + num" class="djmax-star">
          <img v-if="num + 10 <= difficultyLevel" src="@/assets/images/djmax/purplestar.png">
          <img v-else src="@/assets/images/djmax/blackstar.png">
        </div>
      </div>
    </div>
    <div v-if="gameName === 'Muse Dash'" class="musedash-diff">
      <div v-if="difficultyLevel" class="stars-wrapper">
        <div class="easy" :class="{ 'active': difficultyName === 'Easy'}">
          <img src="@/assets/images/musedash/easy.png">
          <h3 v-if="difficultyName === 'Easy'" class="difficultyLevel"> {{ difficultyLevel }} </h3>
        </div>
        <div class="hard" :class="{ 'active': difficultyName === 'Hard'}">
          <img src="@/assets/images/musedash/hard.png">
          <h3 v-if="difficultyName === 'Hard'" class="difficultyLevel"> {{ difficultyLevel }} </h3>
        </div>
        <div class="master" :class="{ 'active': difficultyName === 'Master' || difficultyName === 'Hidden' }">
          <img src="@/assets/images/musedash/master.png">
          <h3 v-if="difficultyName === 'Master' || difficultyName === 'Hidden'" class="difficultyLevel"> {{ difficultyLevel }} </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    gameName: {
      type: String,
      required: true
    },
    difficultyLevel: {
      type: Number,
      required: true
    },
    difficultyName: {
      type: String,
      required: true
    }
  }
  
}
</script>

<style lang="less" scoped>
.difficulty-widget {
  .djmax-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
    .djmax-star {
      margin-left: -2px;
      &.yellow {
        margin-top: 2px;
      }
    }
  }
  .stars-wrapper {
    display: flex;
    justify-content: space-around;
    padding: 5px 115px;
    height: 80px;
    .easy,
    .hard,
    .master,
    .hidden {
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        max-height: 45px;
        display: relative;
      }
      .difficultyLevel {
        position: absolute;
        font-size: 30px;
        color: black;
      }
      &.active {
        img {
          max-height: 80px;
        }
      }
    }
  }
}

</style>