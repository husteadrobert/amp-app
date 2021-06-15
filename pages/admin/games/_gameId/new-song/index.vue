<template>
  <div class="new-song">
    New Songs for - {{ $store.getters['games/game'].name }}
    <AdminSongForm @submit="onSubmit" :albums="albums" :is-edit="false"/>
  </div>
</template>

<script>
import AdminSongForm from "@/components/admin/AdminSongForm"

export default {
  components: {
    AdminSongForm
  },
  layout: 'admin',
  middleware: ['check-auth'],
  computed: {
    albums() {
      return this.$store.getters['games/game'].albums
    }
  },
  methods: {
    onSubmit(payload) {
      console.log(payload)
      this.$store.dispatch('games/addSong', payload)
    }
  }
}
</script>

<style lang="less" scoped>
.new-song {
  background-color: white;
  overflow-y: scroll;
  height: 90vh;
  padding-bottom: 30px;
}
</style>