<template>
  <section class="hero is-primary is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-5-tablet is-4-desktop is-3-widescreen">
            <form action="" class="box">
              <div class="field">
                <label for="" class="label">Password</label>
                <div class="control has-icons-left">
                  <input v-model="password" type="password" placeholder="*******" class="input" required>
                  <span class="icon is-small is-left"><i class="fa fa-lock"></i></span>
                </div>
              </div>
              <div class="field">
                <button @click.prevent="postAuthRequest" class="button is-success is-fullwidth">
                  Conferma identita'
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Login",

  data() {
    return {
      password: null,
      posting: false,
    }
  },

  methods: {
    async postAuthRequest() {
      const endpoint = `${import.meta.env.VITE_BACKEND}/login`
      // Disable form during post
      this.posting = true
      // Post form data
      try {
        const response = await fetch(
            endpoint, {
              method: 'post',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                password: this.password,
              })
            }
        )
        const data = await response.json()
        sessionStorage.setItem("user", JSON.stringify(data.data))
        this.$router.push({name: 'Check', params: {msaid: this.$route.query.requested}})
      } catch (e) {

      }
    }
  },
}
</script>

<style scoped>

</style>