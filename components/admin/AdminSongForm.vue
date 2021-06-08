<template>
  <div class="song-form">
    Song Form
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" v-model="editSong.name" />
      </div>
      <div class="form-group">
        <label for="album">Album</label>
        <select name="album" id="album" v-model="editSong.selectedAlbum">
          <option v-for="album in albums" :key="album.id" :value="album.id">{{album.name}}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="imageUrl">Image</label>
        <div v-if="editSong.imageUrl">
          <!-- Preview of Image -->
          <img :src="editSong.imageUrl">
          <button
            v-if="editSong.imageUrl"
            @click="deleteImage"
            :disabled="isDeletingImage"
            type="button"
          >
            {{ isDeletingImage ? 'Deleting...' : 'Delete' }}
          </button>
        </div>
        <button
          v-if="!editSong.imageUrl"
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
      <button type="button" @click="$router.push(`/admin/games/${$route.params.gameId}`)">Cancel</button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    song: {
      type: Object,
      required: false
    },
    albums: {
      type: Array,
      required: false
    },
    isEdit: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      editSong: this.song ? { ...this.song} :
      {
        name: '',
        imageUrl: '',
        selectedAlbum: this.albums[0].id
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
      const imageRef = storage.ref(`song_images/${file.name}`)

      const uploadTask = imageRef.put(file, metadata).then((snapshot) => {
        return snapshot.ref.getDownloadURL().then((url) => {
          return url
        })
      }).catch((e) => console.log(e))

      uploadTask.then((url) => {
        this.editSong.imageUrl = url
        this.isUploadingImage = false
      })
    },
    deleteImage () {
      this.$fire.storage.refFromURL(this.editSong.imageUrl).delete()
      .then(() => {
        this.editGame.imageUrl = ''
      })
      .catch((e) => console.log(e))
    },
    onSubmit() {
      this.$emit('submit', this.editSong)
      if (!this.isEdit) {
        this.editSong.name = ''
        this.editSong.imageUrl = ''
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