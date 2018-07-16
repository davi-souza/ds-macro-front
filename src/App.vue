<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

import { mapActions } from 'vuex';


export default {
  name: 'App',
  mounted: function() {
    this.getMacrosFromIndexedDB();
    this.getTemplatesFromIndexedDB();
  },
  methods: {
    ...mapActions(['getMacrosFromIndexedDB', 'getTemplatesFromIndexedDB']),
  }
}
</script>


<style lang="scss">
@import "~vue-material/dist/theme/engine"; // Import the theme engine
@include md-register-theme("default", (
  primary: md-get-palette-color(grey, 900), // The primary color of your application
  accent: md-get-palette-color(indigo, 900), // The accent or secondary color
));
@import "~vue-material/dist/theme/all"; // Apply the theme

body {
  font-size: 16px;
  background-color: #eee;
}
</style>

