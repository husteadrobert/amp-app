<template>
  <div>
    Admin Page for {{ currentUser }}
    <a href="#" @click.prevent="onSignOut">Sign Out</a>
  </div>
</template>

<script>


export default ({
  middleware: ['check-auth'],
  computed: {
    currentUser() {
      return this.$store.getters['authentication/userEmail']
    }
  },
  methods: {
    onSignOut() {
      this.$store.dispatch('authentication/signOut')
      .then(() => this.$router.push('/admin/auth'))
      .catch((e) => console.log(e))
    }
  }
})
</script>
