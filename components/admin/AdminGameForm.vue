<template>
  <div class="admin-game-form">
    Admin Game Form
    <form @submit.prevent="$emit('submit', game)">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" v-model="game.name" />
      </div>
      <div class="form-group">
        <label for="imageUrl">Image</label>
        <div v-if="game.imageUrl">
          <!-- Preview of Image -->
          <img :src="game.imageUrl">
          <button
            v-if="game.imageUrl"
            @click="deleteImage"
            :disabled="isDeletingImage"
            type="button"
          >
            {{ isDeletingImage ? 'Deleting...' : 'Delete' }}
          </button>
        </div>
        <button
          v-if="!game.imageUrl"
          @click="launchImageFile"
          :disabled="isUploadingImage"
          type="button"
        >
          {{ isUploadingImage ? 'Uploading...' : 'Upload' }}
        </button>
        <!-- Real file input element -->
        <input
          ref="imageFile"
          @change.prevent="uploadImageFile($event.target.files)"
          type="file"
          class="hidden"
        >
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
        name: '',
        imageUrl: ''
      },
      isUploadingImage: false,
      isDeletingImage: false
    }
  },
  methods: {
    launchImageFile() {
      this.$refs.imageFile.click()
    },
    uploadImageFile (files) {
      if (!files.length) {
        return
      }
      const file = files[0]

      if (!file.type.match('image.*')) {
        alert('Not an image dipshit')
        return
      }

      const metadata = {
        contentType: file.type
      }

      this.isUploadingImage = true

      const storage = this.$fire.storage
      const imageRef = storage.ref(`game_images/${file.name}`)

      const uploadTask = imageRef.put(file, metadata).then((snapshot) => {
        return snapshot.ref.getDownloadURL().then((url) => {
          return url
        })
      }).catch((e) => console.log(e))

      uploadTask.then((url) => {
        this.game.imageUrl = url
        this.isUploadingImage = false
      })
    },
    deleteImage () {
      this.$fire.storage.refFromURL(this.game.imageUrl).delete()
      .then(() => {
        this.game.imageUrl = ''
      })
      .catch((e) => console.log(e))
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
  .hidden {
    display: none;
  }
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