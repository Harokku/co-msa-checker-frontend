<template>
  <form class="pt-4">

    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">Operatore</label>
      </div>
      <div class="field-body">
        <div class="field">
          <div class="control">
            <input
                v-model="operator"
                class="input is-info"
                placeholder="Nominativo"/>
          </div>
        </div>
      </div>
    </div>
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">Nuovo aggiornamento</label>
      </div>
      <div class="field-body">
        <div class="field">
          <div class="control">
            <textarea v-model="note"
                      class="textarea is-info"
                      placeholder="Descrizione aggiornamento"></textarea>
          </div>
        </div>
      </div>
    </div>

    <div class="field is-grouped is-grouped-centered">
      <div class="control">
        <button class="button is-outlined">Annulla i precedenti</button>
      </div>
      <div class="control">
        <button
            @click="postUpdate"
            class="button is-primary">Salva aggiornamento
        </button>
      </div>
    </div>

  </form>
</template>

<script>
export default {
  name: "DetailNew",

  props: {
    infoId: String,
  },

  data() {
    return {
      note: '',
      operator: '',
      deprecateOlder: false,
      posting: false,
    }
  },

  //TODO: Implement post logic
  methods: {
    async postUpdate() {
      const endpoint = `${import.meta.env.VITE_BACKEND}/info/updates`
      // Disable form during post
      this.posting = true
      //Post form data
      try {
        const response = await fetch(
            endpoint, {
              method: 'post',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                info_id: this.infoId,
                note: this.note,
                operator: this.operator,
              })
            }
        )
      } catch (e) {

      }
    }
  }
}
</script>

<style scoped>

</style>