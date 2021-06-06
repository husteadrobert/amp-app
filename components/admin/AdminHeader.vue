<template>
  <div class="header-container">
    <ul class="nav-list">
      <li class="nav-item"><nuxt-link to="/admin">Admin Home</nuxt-link></li>
      <li class="nav-item"><nuxt-link to="/admin/games">Games Index</nuxt-link></li>
      <li class="nav-item"><a href="#" @click.prevent="onSignOut">Sign Out</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    onSignOut() {
      this.$store.dispatch('authentication/signOut')
      .then(() => this.$router.push('/admin/auth'))
      .catch((e) => console.log(e))
    },
  }
}
</script>

<style coped lang="less">
.header-container {
  padding: 20px 10px;
  ul {
    list-style: none;
    li {
      display: inline-block;
      padding: 10px 20px;
      .nuxt-link-exact-active {
        color: red;
      }
    }
  }
}
</style>