<template>
  <div>
    Admin Page for {{ currentUser }}
    <a href="#" @click.prevent="onSignOut">Sign Out</a>
    <a href="#" @click.prevent="onCreatePost">Create Post</a>
    <div>
      <input
        ref="imageFile"
        @change.prevent="uploadImageFile($event.target.files)"
        type="file"
        accept="image/jpeg"
      />
    </div>
    <img src="https://firebasestorage.googleapis.com/v0/b/amplify-a4c63.appspot.com/o/images%2F456.jpg?alt=media&token=534c10e3-981f-4c72-bb14-a82d4680cf3b">
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
    },
    uploadImageFile(files) {
      if (!files.length) {
        return
      }
      const file = files[0]

      const metadata = { contentType: file.type }
      const storage = this.$fire.storage
      const imageRef = storage.ref(`images/${file.name}`)

      const uploadTask = imageRef.put(file, metadata).then((snapshot) => {
        return snapshot.ref.getDownloadURL().then((url) => {
          return url
        })
      }).catch((e) => console.log(e))

      uploadTask.then((url) => {
        console.log("THIS IS THE URL")
        console.log(url)
      })
    }
  }
})
</script>
