<template>
  <div class="header-nav">
    <div class="header-nav-inner">
      <nuxt-link to="/">
        <div class="logo">
          LOGO
        </div>
      </nuxt-link>
      <div class="navigation-buttons">
        <nuxt-link to="/games">Games</nuxt-link>
        <nuxt-link to="/howto">How To Use</nuxt-link>
        <nuxt-link to="/about">About</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="less" scoped>
.header-nav {
  display: block;
  background-color: green;
  height: 75px;
  .header-nav-inner {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    margin: 0 10px;
    .navigation-buttons {
      display: flex;
      width: 25%;
      justify-content: space-around;
    }
  }
}

</style>