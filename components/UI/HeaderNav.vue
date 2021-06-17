<template>
  <div class="header-nav">
    <div class="header-nav-inner">
      <nuxt-link to="/">
        <div class="logo">
          <div class="logo-wrapper">
            <img src="@/assets/images/headphonesicon.png">
          </div>
        </div>
      </nuxt-link>
      <div class="navigation-buttons">
        <ul>
          <li class="games">
            <nuxt-link to="/games">Games</nuxt-link>
          </li>
          <li class="howto">
            <nuxt-link to="/howto">How To Use</nuxt-link>
          </li>
          <li class="about">
            <nuxt-link to="/about">About</nuxt-link>
          </li>
        </ul>
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
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(175,60,171,1) 0%, rgba(0,0,0,1) 50%);
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom: 1px solid rgb(175, 60, 171);
  height: 75px;
  .header-nav-inner {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    margin: 0 10px;
    .logo {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 65px;
      height: 65px;
      border: 5px solid black;
      border-radius: 100%;
      .logo-wrapper {
        img {
          width: 80px;
        }
      }
    }
    .navigation-buttons {
      width: 25%;
      ul {
        display: flex;
        justify-content: center;
        align-items: center;
        li {
          display: inline-block;
          margin-right: 10px;
          background-color: #461444;
          border-radius: 10px;
          &.games {
            background-color: rgb(175, 60, 171);
          }
          a {
            text-decoration: none;
            color: white;
            font-weight: bold;
            display: block;
            padding: 20px;

          }
        }
      }
    }
  }
}

</style>