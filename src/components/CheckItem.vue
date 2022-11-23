<template>
  <div class="card">
    <header class="card-header">
      <div class="card-header-title is-justify-content-space-between">
        <p>{{ parseTimestamp(item.timestamp) }}</p>
        <p class="tag" :class="getTagColor(item.priority)">{{ item.priority }}</p>
      </div>
    </header>
    <div class="card-content has-text-centered">
      <div class="content">
        {{ item.note }}
      </div>
      <DetailList v-if="showUpdate" :info-id="item.id"/>
    </div>
    <footer class="card-footer">
      <button @click="showUpdate = !showUpdate"
              class="button is-primary is-inverted card-footer-item">
        Aggiornamenti
      </button>
    </footer>
  </div>
</template>

<script>
import DetailList from "./DetailList.vue";
import {tagColor} from "../utils/getColors";
import {shortDT} from "../utils/time";

export default {
  name: "CheckItem",
  components: {
    DetailList,
  },
  props: {
    item: Object,
  },

  data() {
    return {
      showUpdate: false,
    }
  },

  methods: {
    getTagColor(level) {
      return tagColor(level[0])
    },
    parseTimestamp(timestamp) {
      return shortDT(timestamp)
    }
  },
}
</script>

<style scoped>

</style>