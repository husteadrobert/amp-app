<template>
  <div class="admin-game-form">
    Admin Game Form
    <form @submit.prevent="$emit('submit', game)">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" v-model="game.name" />
      </div>
      <button type="submit">Submit</button>
      <button type="button" @click="$router.push('/admin/games')">Cancel</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      game: {
        name: null
      }
    }
  }
}
</script>

<style scoped lang="less">
.admin-game-form {
  text-align: left;
  width: 50%;
  margin: 10px auto;
  padding: 10px;
  .form-group {
    label {
      display: block;
    }
    input[type=text] {
      width: 100%;
    }
  }
}
</style>