<template>
  <div class="home">
    <simple-app-bar />
    <grid-body>

      <macro-table v-bind:macros="macros" />

    </grid-body>

    <corner-speed-dial v-bind:main="speeddial.main" v-bind:options="speeddial.options" />
  </div>
</template>

<script>
import SimpleAppBar from '@/components/AppBar/SimpleAppBar';
import GridBody from '@/components/Grid/GridBody';
import SimpleCard from '@/components/Card/SimpleCard';
import MacroTable from '@/components/Table/MacroTable';
import CornerSpeedDial from '@/components/SpeedDial/CornerSpeedDial';

import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Home',
  components: {
    SimpleAppBar,
    GridBody,
    SimpleCard,
    MacroTable,
    CornerSpeedDial,
  },
  data: () => ({
    speeddial: {main:'more_vert',options:[{icon:'fastfood',to:'/template/add'},{icon:'add',to:'/macro/add'},{icon:'home',to:'/'}]},
  }),
  computed: mapGetters([
    'macros'
  ]),
}
</script>


