<template>
  <div>
    Admin Page for {{ currentUser }}
    <a href="#" @click.prevent="onSignOut">Sign Out</a>
    <a href="#" @click.prevent="onCreatePost">Create Post</a>
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
    },
    onCreatePost() {
      this.$store.dispatch('authentication/createPost')
    }
  }
})
</script>
