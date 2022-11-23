<template>
  <!--      Fetch error message-->
  <p v-if="error">Error: {{ error }}</p>

  <!--      Loading message-->
  <p v-if="loading">Loading...</p>

  <!--      Data-->
  <div v-if="data">
    <!--    Found updates, display them-->
    <DetailItem v-if="retrieved > 0" v-for="update in data" :update="update"/>
    <!--    No update, display info msg-->
    <div v-else class="message is-info">
      <div class="message-body">Nessun aggiornamento</div>
    </div>
  </div>
  <DetailNew :info-id="infoId"/>
</template>

<script>
import DetailItem from "./DetailItem.vue"
import DetailNew from "./DetailNew.vue"

export default {
  name: "DetailList",

  components: {
    DetailItem,
    DetailNew,
  },

  props: {
    infoId: String,
  },

  data() {
    return {
      loading: false,
      error: null,
      data: null,
      retrieved: 0,
    }
  },

  created() {
    this.fetchData()
  },

  methods: {
    async fetchData() {
      const endpoint = `${import.meta.env.VITE_BACKEND}/info/updates/all/${this.infoId}`
      // Set error, data object and loading state
      this.error = this.info = null
      this.loading = true
      // Fetch data
      try {
        const response = await fetch(endpoint)
        const data = await response.json()
        // Check retrieved number, if 0 set data as empty array (indicating a successful fetch with 0 items)
        data.retrieved > 0
            ? this.data = data.data
            : this.data = []
        this.retrieved = data.retrieved
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