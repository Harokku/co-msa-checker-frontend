<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-5by3">
        <qrcode-vue :value="fullPathFromId" level="L" :margin="margin" :size="size"/>
      </figure>
    </div>
    <div class="card-content">
      <div class="content has-text-centered">
        <h3>{{ radioCode }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import QrcodeVue from 'qrcode.vue'

export default {
  name: "MsaQrCode",

  props: {
    qrValue: String,
    radioCode: String,
  },

  data() {
    return {
      margin: 3,
      size: 300
    }
  },

  computed:{
    fullPathFromId(){
      return `${import.meta.env.VITE_FRONTEND}/check/${this.qrValue}`
    }
  },

  components: {
    QrcodeVue
  },
}
</script>

<style scoped>

</style>