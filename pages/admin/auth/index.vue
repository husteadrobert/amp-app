<template>
  <div>
    Auth Index Page
    <form @submit.prevent="onSubmit">
      <input type="email" v-model="email" />
      <input type="password" v-model="password" />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default ({
  asyncData(context) {
    console.log(context.res)
  },
  data() {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    async onSubmit() {
      await this.$store.dispatch('authentication/signIn', {email: this.email, password: this.password})
      .then((result) => {
        if(result) {
          this.$router.push('/admin')
        }
      })
      .catch((e) => console.log(e))
    },
  },
})
</script>

<style scoped lang="less">
</style>
