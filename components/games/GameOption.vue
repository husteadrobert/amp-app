<template>
  <div class="game-option">
    Game Options
    <div>
      <select v-model="selectedPlayStyle">
        <option v-for="style in playStyles" :key="style.name">{{ style.name }}</option>
      </select>
    </div>
    <div>
      <select v-model="selectedBackgroundColor">
        <option value="">None</option>
        <option value="#00b140">Green</option>
        <option value="#0047bb">Blue</option>
        <option value="#000000">Black</option>
        <option value="#FFFFFF">White</option>
      </select>
    </div>
    <div>
      <input type="radio" id="showDiff" :value="true" v-model="showDiffRadio">
      <label for="showDiff">Show Difficulty</label>
      <br>
      <input type="radio" id="hideDiff" :value="false" v-model="showDiffRadio">
      <label for="hideDiff">Hide Difficulty</label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    playStyles: {
      type: Array,
      required: true
    }
  },
  computed: {
    selectedPlayStyle: {
      get: function () {
        return this.$store.getters['client/playStyle']
      },
      set: function (newValue) {
        this.$store.dispatch('client/setPlayStyle', newValue)
      }
    },
    selectedBackgroundColor: {
      get: function() {
        return this.$store.getters['client/backgroundColor']
      },
      set: function (newValue) {
        this.$store.dispatch('client/setBackgroundColor', newValue)
      }
    },
    showDiffRadio: {
      get: function() {
        return this.$store.getters['client/showDiff']
      },
      set: function(newValue) {
        this.$store.dispatch('client/setShowDiff', newValue)
      }
    }

  }
}
</script>

<style lang="less" scoped>

</style>