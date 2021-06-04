<template>
  <div class="container">
    <div>
      {{ currentUser }}
    </div>
    <div>
      <Logo />
      <h1 class="title">
        Amplitude
      </h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
    <form>
      <input type="email" v-model="email" />
      <input type="password" v-model="password" />
      <a href="#" @click.prevent="onSubmit">Login</a>
      <a href="#" @click.prevent="onLogout">Logout</a>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    async onSubmit() {
      await this.$store.dispatch('authentication/signIn', {email: this.email, password: this.password })
      .then((result) => console.log(result))
      .catch((e) => console.log(e))
    },
    async onLogout() {
      await this.$store.dispatch('authentication/signOut')
      .then((result) => console.log(result))
      .catch((e) => console.log(e))
    }
  },
  computed: {
    currentUser() {
      if (this.$store.getters['authentication/isAuthenticated']) {
        const name = this.$store.getters['authentication/userEmail']
        return name
      } else {
        return "No User"
      }
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
