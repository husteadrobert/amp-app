<template>
  <div class="difficulty-button" @click.stop="onSetGameAndDifficulty" :class="{'disabled': difficultyLevel === -1}" >
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
  },
  methods: {
    onSetGameAndDifficulty() {
      if (this.difficultyLevel === -1) {
        return
      } else {
        const data = {
        difficultyName: this.difficultyName,
        difficultyLevel: this.difficultyLevel
        }
        this.$emit('onClickDifficulty', data)
      }
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
  cursor: pointer;
  &.disabled {
    background-color: grey;
    cursor: default;
    &:hover {
      background-color: grey;
      color: black;
    }
  }
  &:hover {
    background: rgb(175, 60, 171);
    color: white;
  }
}

</style>