<template>
  <div class="admin-song-form">
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
      <div class="form-group">
        <div v-for="style in gamePlayStyles" :key="style.name">
          <div class="style">
            {{ style.name }}
          </div>
          <div v-for="difficulty in gameDifficulties" :key="difficulty.name">
            <input v-model.number="editSong.difficulties[style.name][difficulty.name]"/>
          </div>
        </div>
      </div>
      <button type="submit">Submit</button>
      <button type="button" @click="$router.push(`/admin/games/${$route.params.gameId}`)">Cancel</button>
    </form>
  </div>
</template>

<script>
import _ from 'lodash'

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
    let diffHash = {}
    this.$store.getters['games/game'].playStyles.forEach((style) => diffHash[style.name] = {})
    const diffArray = this.$store.getters['games/game'].difficulties.map((diff) => diff.name)
    Object.keys(diffHash).forEach((key) => {
      diffArray.forEach((diffName) => {
        diffHash[key][diffName] = null
      })
    })
    return {
      editSong: this.song ? _.cloneDeep(this.song) :
      {
        name: '',
        imageUrl: '',
        selectedAlbum: this.albums[0].id,
        difficulties: diffHash,
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
      this.editSong.imageUrl = ''
    },
    onSubmit() {
      this.$emit('submit', this.editSong)
      if (!this.isEdit) {
        this.editSong.name = ''
        this.editSong.imageUrl = ''
      }
    }
  },
  computed: {
    gameDifficulties() {
      return this.$store.getters['games/game'].difficulties
    },
    gamePlayStyles() {
      return this.$store.getters['games/game'].playStyles
    }
  }
}
</script>

<style scoped lang="less">
.admin-song-form {
  text-align: left;
  width: 50%;
  margin: 10px auto;
  padding: 10px;
  .hidden {
    display: none;
  }
  .form-group {
    img {
      width: 200px;
    }
    label {
      display: block;
    }
    input[type=text] {
      width: 100%;
    }
  }
}
</style>