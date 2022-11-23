<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
  <router-view/>
  <div class="footer">
    <div class="content has-text-centered">
      <router-link :to="{name: 'Scanner'}">Scanner</router-link>
      |
      <router-link :to="{name: 'Check', params: {msaid: 'Luiggi'}}">Check</router-link>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
