<template>
  <section class="section">
    <div class="container">
      <div class="notification is-info is-light" v-if="msa">Consegne MSA: <strong>{{ msa.radiocode }}</strong> -
        {{ msa.plate }}
      </div>
      <div>
        <InfoNew :msa-id="msa.id"/>
        <br/>
      </div>

      <!--      Fetch error message-->
      <p v-if="error">Error: {{ error }}</p>

      <!--      Loading message-->
      <p v-if="loading">Loading...</p>

      <!--      Data-->
      <div v-for="item in info" v-if="this.info">
        <CheckItem :item="item"/>
        <br/>
      </div>

    </div>
  </section>
</template>

<script>
import CheckItem from "./CheckItem.vue";
import InfoNew from "./InfoNew.vue";

export default {
  name: "CheckList",
  components: {
    CheckItem,
    InfoNew
  },

  data() {
    return {
      loading: false,
      error: null,
      info: null,
      msa: null,
    }
  },

  created() {
    this.$watch(
        () => this.$route.params,
        () => this.fetchData(),
        {immediate: true},
    )
  },

  methods: {
    async fetchData() {
      const endpoints = [
        `${import.meta.env.VITE_BACKEND}/fleet/${this.$route.params.msaid}`,
        `${import.meta.env.VITE_BACKEND}/info/all/${this.$route.params.msaid}`,
      ]
      // Set error, data object and loading state
      this.error = this.info = null
      this.loading = true
      // Fetch data
      try {
        const response = await Promise.all(
            endpoints.map(url => fetch(url).then(res => res.json()))
        )
        this.msa = response[0].data
        this.info = response[1].data
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