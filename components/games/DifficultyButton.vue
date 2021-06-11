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
  background-color: white;
  text-align: center;
  padding: 2px 0;
  border-radius: 5px;
}

</style>