<template>
  <div>
    Game Page with ID {{ this.$route.params.gameId }}
  </div>
</template>

<script>
export default {
  layout: 'admin',
  middleware: ['check-auth']
}
</script>