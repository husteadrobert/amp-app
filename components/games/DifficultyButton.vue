<template>
  <div class="difficulty-button">
    {{ difficultyName }}
  </div>
</template>

<script>
export default {
  props: {
    songId: {
      type: String,
      required: true
    },
    difficultyName: {
      type: String,
      required: true
    },
    difficultyLevel: {
      type: Number,
      required: true
    }
  }
  
}
</script>

<style lang="less" scoped>
.difficulty-button {
  width: 60px;
  margin-right: 10px;
  text-align: center;
}

</style>