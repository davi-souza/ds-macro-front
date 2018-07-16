<template>
  <div class="ds-template-add">
    <simple-app-bar />

    <grid-body>

      <simple-card>

        <div class="md-layout md-alignment-top-space-around">

          <div class="md-layout-item md-size-100">
            <span class="md-display-2">Add Template</span>
          </div>

          <div class="md-layout-item md-size-100">
            <md-field>
              <label>TEMPLATE NAME</label>
              <md-input type="text" v-model="name" placeholder="TEMPLATE NAME" />
            </md-field>
          </div>

          <div class="md-layout-item md-size-30">
            <md-field>
              <label>% of carb</label>
              <md-input type="number" v-model.number="carb" placeholder="% of carb" />
            </md-field>
          </div>

          <div class="md-layout-item md-size-30">
            <md-field>
              <label>% of prot</label>
              <md-input type="number" v-model.number="prot" placeholder="% of prot" />
            </md-field>
          </div>

          <div class="md-layout-item md-size-30">
            <md-field>
              <label>% of fat</label>
              <md-input type="number" v-model.number="fat" placeholder="% of fat" />
            </md-field>
          </div>

          <div class="md-layout-item md-size-100">
            <md-button class="md-raised md-accent" id="ds-template-add-button-save" @click="confirmTemplateAdd">Save</md-button>
          </div>

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

import { mapActions } from 'vuex';

export default {
  name: 'TemplateAdd',
  components: {
    SimpleAppBar,
    GridBody,
    SimpleCard,
    CornerSpeedDial
  },
  data: function() {
    return ({
      name: null,
      carb: null,
      prot: null,
      fat: null,
      speeddial: {main:'more_vert',options:[{icon:'fastfood',to:'/template/add'},{icon:'add',to:'/macro/add'},{icon:'home',to:'/'}]},
    })
  },
  methods: {
    confirmTemplateAdd: function () {
      if(this.name == null || this.name == '') {
        return;
      }
      if(this.carb == null && this.prot == null && this.fat == null) {
        return;
      }
      if(window.confirm('Are you sure you want to add this template?')) {
        let id = this.name.toLowerCase();
        id = id.replace(/ /g,"-");
        this.carb = this.carb || 0;
        this.prot = this.prot || 0;
        this.fat = this.fat || 0;
        this.addTemplate({
          id: id,
          name: this.name,
          carb: this.carb,
          prot: this.prot,
          fat: this.fat,
        });
        this.eraseData();
      }
      else {
        console.log('cancel...');
      }
    },
    ...mapActions(['addTemplate']),
    eraseData: function () {
      this.name = this.carb = this.prot = this.fat = null;
    }
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
