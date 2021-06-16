<template>
  <div class="difficulty-widget">
    <div v-if="gameName === 'DJMAX RESPECT V'" class="djmax-diff">
      <div v-if="difficultyLevel" class="djmax-wrapper">
        <div v-for="num in 15" :key="num" class="djmax-star">
          <img src="@/assets/images/djmax/yellowstar.png">
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
          <img src="@/assets/images/musedash/easy.png">
          <h3 v-if="difficultyName === 'Hard'" class="difficultyLevel"> {{ difficultyLevel }} </h3>
        </div>
        <div class="master" :class="{ 'active': difficultyName === 'Master' || difficultyName === 'Hidden' }">
          <img src="@/assets/images/musedash/easy.png">
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
      margin-left: -3px;
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