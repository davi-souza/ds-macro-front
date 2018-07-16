<template>
  <div class="ds-corner-speed-dial">
    <md-speed-dial md-event="click" md-direction="top">

      <md-speed-dial-target class="md-accent" title="More options">
        <md-icon>{{ main }}</md-icon>
      </md-speed-dial-target>

      <md-speed-dial-content>

        <md-button class="md-raised md-icon-button md-primary" @click='confirmEraseMacros'>
          <md-icon>delete</md-icon>
        </md-button>

        <md-button v-for="option in options" :key="option.icon" class="md-icon-button md-raised md-accent" v-bind:to="option.to">
          <md-icon>{{ option.icon }}</md-icon>
        </md-button>

      </md-speed-dial-content>

    </md-speed-dial>

  </div>
</template>


<script>

import { mapActions } from 'vuex';

export default {
  name: 'CornerSpeedDial',
  props: ['main','options'],
  methods: {
    confirmEraseMacros: function() {
      if(confirm('Are you sure you want to erase all macros?')) {
        this.eraseMacros();
      }
      else {
        console.log('[LOG] Macros not erased!');
      }
    },
    ...mapActions(['eraseMacros'])
  }
}
</script>

<style lang="scss" scoped>
.ds-corner-speed-dial {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
}
</style>