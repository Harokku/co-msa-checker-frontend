<template>
  <div class="message" :class="getDeprecatedColor(update.deprecated)">
    <div class="message-header">
      {{ parseTimestamp(update.timestamp) }}<small>{{ update.operator }}</small>
    </div>
    <div class="message-body">
      {{ update.note }}
    </div>
  </div>
</template>

<script>
import {deprecationColor} from "../utils/getColors";
import {shortDT} from "../utils/time";

export default {
  name: "DetailItem",
  props: {
    update: Object,
  },

  methods: {
    getDeprecatedColor(deprecated) {
      return deprecationColor(deprecated)
    },
    parseTimestamp(timestamp) {
      return shortDT(timestamp)
    },
  },
}
</script>

<style scoped>

</style>