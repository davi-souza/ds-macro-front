<template>
  <div class="ds-template-remove">
    <simple-app-bar />

    <grid-body>

      <simple-card>

        <div class="md-layout md-alignment-top-space-around">

          <div class="md-layout-item md-size-100">
            <span class="md-display-2">Remove Template</span>
          </div>

          <p>{{ templates }}</p>

        </div>

      </simple-card>

    </grid-body>

    <corner-speed-dial v-bind:main="speeddial.main" v-bind:options="speeddial.options" />
  </div>
</template>

<script>
import SimpleAppBar from '@/components/AppBar/SimpleAppBar';
import GridBody from '@/components/Grid/GridBody';
import SimpleCard from '@/components/Card/SimpleCard';
import CornerSpeedDial from '@/components/SpeedDial/CornerSpeedDial';

import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'TemplateRemove',
  components: {
    SimpleAppBar,
    GridBody,
    SimpleCard,
    CornerSpeedDial
  },
  data: function() {
    return ({
      speeddial: {main:'more_vert',options:[{icon:'fastfood',to:'/template/add'},{icon:'add',to:'/macro/add'},{icon:'home',to:'/'}]},
    })
  },
  computed: mapGetters(['templates']),
  mounted: function() {

  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.md-layout-item{
  text-align: center;
}
.md-input {
  width: 100%;
}
#ds-template-add-button-save {
  width: 60%;
  border-radius: 5rem;
}
</style>
