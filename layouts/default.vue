<template>
  <div class="container">
    <HeaderNav />
    <Nuxt />
  </div>
</template>

<script>
import HeaderNav from '@/components/UI/HeaderNav'

export default {
  components: {
    HeaderNav
  }
}
</script>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  overflow: hidden;
  background-image: url('~@/assets/images/noise.gif');
  background-size: cover;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
