<template>
  <div class="new-game">
    <h1 class="test">New Game Page</h1>
    <AdminGameForm @submit="onSubmit"/>
  </div>
</template>

<script>
import AdminGameForm from '@/components/admin/AdminGameForm'

export default {
  layout: 'admin',
  middleware: ['check-auth'],
  components: {
    AdminGameForm
  },
  methods: {
    onSubmit(payload) {
      this.$store.dispatch('games/addGame', payload)
      .then((result) => {
        this.$router.push('/admin/games')
      })
      .catch((e) => console.log(e))
    }
  }
}
</script>

<style scoped lang="less">
.new-game {
  width: 90%;
  margin: 20px auto;
  text-align: center;
}
</style>