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
          // Due to timing issues, need to wait a second for Store State to 'catch up'
          setTimeout(function(){
            this.$router.push('/admin')
           }.bind(this), 1000)
        }
      })
      .catch((e) => console.log(e))
    },
  },
})
</script>

<style scoped lang="less">
</style>
