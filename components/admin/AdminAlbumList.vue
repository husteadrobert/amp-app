<template>
  <div class="album-list">
    Album list
    <ul>
      <li v-for="album in albums" :key="album.id">
        {{album.name}}
        <button type="button" @click.prevent="onDelete(album.id)">X</button>
      </li>
    </ul>
    <div v-if="showForm" class="toggle-form">
      <form @submit.prevent="onSubmit">
        <label for="albumName">Album Name</label>
        <input type="text" id="albumName" v-model="albumName" />
        <button type="submit">Add</button>
      </form>
    </div>
    <button @click.prevent="toggleForm"> {{ showForm ? '-' : '+' }} </button>
  </div>
</template>

<script>
export default {
  props: {
    albums: {
      type: Array,
      required: false
    }
  },
  data() { 
    return {
      showForm: false,
      albumName: ''
    }
  },
  methods: {
    toggleForm() {
      this.showForm = !this.showForm
    },
    onSubmit() {
      this.$store.dispatch('games/addAlbum', { name: this.albumName })
      .then((result) => {
        this.toggleForm()
      })
      .catch(e => console.log(e))
    },
    onDelete(id) {
      this.$store.dispatch('games/deleteAlbum', id)
      .then((result) => {
      })
      .catch(e => console.log(e))
    }
  },
}
</script>

<style lang="less" scoped>

</style>