<template>
  <div class="games-container">
    <div class="games-show">
      Main Area
    </div>
    <div class="games-sidebar">
      Sidebar
      <ul>
        <li v-for="num in 100" :key="num">HELLO WORLD</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="less" scoped>
.games-container {
  display: flex;
  height: 92.25vh;
  .games-show {
    background-color: blue;
    width: 65%;
  }
  .games-sidebar {
    background-color: red;
    width: 35%;
    overflow: auto;
  }
}

</style>