<template>
  <div class="card">
    <header class="card-header">
      <div class="card-header-title is-justify-content-space-between">
        <p>Inserisci nuova consegna</p>
      </div>
    </header>

    <div class="card-content has-text-centered">
      <form class="pt-4">

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Operatore</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <input
                    disabled
                    v-model="operator"
                    class="input is-info"
                    placeholder="Nominativo"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Nuova consegna</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <textarea
                    v-model="note"
                    class="textarea is-info"
                    placeholder="Descrizione consegna">
                </textarea>
              </div>
            </div>
          </div>
        </div>
        <div class="is-centered has-addons">
          <button
              @click.prevent="this.priority='3 - Low'"
              class="button"
              :class="isLowPrio">Bassa
          </button>
          <button
              @click.prevent="this.priority='2 - Normal'"
              class="button "
              :class="isNormalPrio">Normale
          </button>
          <button
              @click.prevent="this.priority='1 - High'"
              class="button"
              :class="isHighPrio">Alta
          </button>
        </div>

        <hr/>

        <div class="field is-grouped is-grouped-centered">
          <div class="control">
            <button
                @click="postUpdate"
                class="button is-primary">Aggiungi consegna
            </button>
          </div>
        </div>

      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoNew",

  props: {
    msaId: String,
  },

  data() {
    return {
      id: JSON.parse(sessionStorage.getItem("user")).id,
      note: '',
      operator: JSON.parse(sessionStorage.getItem("user")).username,
      priority: '2 - Normal',
      posting: false,
    }
  },

  computed: {
    isLowPrio() {
      return this.priority[0] === '3' ? 'is-success' : ''
    },
    isNormalPrio() {
      return this.priority[0] === '2' ? 'is-warning' : ''
    },
    isHighPrio() {
      return this.priority[0] === '1' ? 'is-danger' : ''
    },
  },

  methods: {
    async postUpdate() {
      const endpoint = `${import.meta.env.VITE_BACKEND}/info`
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
                note: this.note,
                operator: this.id,
                priority: this.priority,
                msa_id: this.msaId,
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