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
      console.log(payload)
      // Send to Action
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