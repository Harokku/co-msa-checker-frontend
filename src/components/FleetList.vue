<template>
  <section class="section">
    <div class="container">
      <msa-qr-code qr-value="123ddd" radio-code="123erd"/>
    </div>
  </section>
</template>

<script>
import MsaQrCode from './MsaQrCode.vue'

export default {
  name: "FleetList",

  components: {
    MsaQrCode
  },

  data() {
    return {
      loading: false,
      error: null,
      fleet: null,
    }
  },

  created() {
    this.fetchData()
  },

  methods: {
    async fetchData() {
      const endpoint = `${import.meta.env.VITE_BACKEND}/fleet`

      // Set error, data object and loading state
      this.error = this.fleet = null
      this.loading = true

      // Fetch data
      try {
        const response = await fetch(endpoint).then(res => res.json())
        this.fleet = response.data
        this.loading = false
      } catch (e) {
        this.error = e
        this.loading = false
      }
    },
  },
}
</script>

<style scoped>

</style>