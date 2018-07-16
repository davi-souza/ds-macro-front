<template>
  <div class="ds-macro-add">
    <simple-app-bar />

    <grid-body>

      <simple-card>

        <div class="md-layout md-alignment-center-space-around">

          <div class="md-layout-item md-size-100">
            <span class="md-display-2">Add Macros</span>
          </div>

          <div class="md-layout-item md-size-100" id="ds-macro-add-switch-use-template">
            <md-switch v-model="useTemplate">Use Template</md-switch>
          </div>
          
        </div>

        <div v-if="useTemplate">

          <div class="md-layout md-alignment-center-space-around">

            <div class="md-layout-item md-size-100" id="ds-macro-add-switch-use-template">
              <md-field>
                <label>TEMPLATE</label>
                <md-select v-model="template">
                  <md-option v-for="t in templates" :key="t.id" v-bind:value="templates.indexOf(t)" placeholder="TEMPLATE">{{ t.name }}</md-option>
                </md-select>
              </md-field>
            </div>

            <div class="md-layout-item md-size-100">
              <md-field>
                <label>WEIGHT (g)</label>
                <md-input type="number" v-model="templateWeight" placeholder="WEIGHT (g)" />
              </md-field>
            </div>

            <div class="md-layout-item md-size-30">
              <md-field>
                <label>CARB (g)</label>
                <md-input readonly type="number" id="ds-macro-add-use-template-carb" placeholder="CARB (g)" v-bind:value="template!=null?templates[template].carb*templateWeight/100:null" />
              </md-field>
            </div>

            <div class="md-layout-item md-size-30">
              <md-field>
                <label>PROT (g)</label>
                <md-input readonly type="number" id="ds-macro-add-use-template-prot" placeholder="PROT (g)" v-bind:value="template!=null?templates[template].prot*templateWeight/100:null" />
              </md-field>
            </div>

            <div class="md-layout-item md-size-30">
              <md-field>
                <label>FAT (g)</label>
                <md-input readonly type="number" id="ds-macro-add-use-template-fat" placeholder="FAT (g)" v-bind:value="template!=null?templates[template].fat*templateWeight/100:null" />
              </md-field>
            </div>

          </div>

        </div>

        <div v-else>

          <div class="md-layout md-alignment-center-space-around">

            <div class="md-layout-item md-size-100" id="ds-macro-add-total-kcal">
              <span class="md-display-1">{{ carb*4 + prot*4 + fat*9 }} kcal</span>
            </div>

            <div class="md-layout-item md-size-30">
              <md-field>
                <label>CARB (g)</label>
                <md-input v-model.number="carb" type="number"></md-input>
              </md-field>
            </div>

            <div class="md-layout-item md-size-30">
              <md-field>
                <label>PROT (g)</label>
                <md-input v-model.number="prot" type="number"></md-input>
              </md-field>
            </div>
            
            <div class="md-layout-item md-size-30">
              <md-field>
                <label>FAT (g)</label>
                <md-input v-model.number="fat" type="number"></md-input>
              </md-field>
            </div>

          </div>

        </div>
        
        <div class="md-layout md-alignment-center-center">

          <div class="md-layout-item md-size-45">
            <md-button class="md-raised md-accent" @click='prepareAddMacros()'>Add</md-button>
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

import { mapGetters , mapActions } from 'vuex';

export default {
  name: 'MacroAdd',
  components: {
    SimpleAppBar,
    GridBody,
    SimpleCard,
    CornerSpeedDial
  },
  data: () => ({
    carb: null,
    prot: null,
    fat: null,
    useTemplate: false,
    template: null,
    templateWeight: null,
    speeddial: {main:'more_vert',options:[{icon:'fastfood',to:'/template/add'},{icon:'add',to:'/macro/add'},{icon:'home',to:'/'}]},
  }),
  computed: mapGetters([
    'templates'
  ]),
  methods: {
    prepareAddMacros: function() {
      if(this.useTemplate === true) {
        this.carb = document.getElementById('ds-macro-add-use-template-carb').value;
        this.prot = document.getElementById('ds-macro-add-use-template-prot').value;
        this.fat = document.getElementById('ds-macro-add-use-template-fat').value;
      }
      if(this.carb == null && this.prot == null && this.fat == null) {
        return;
      }
      if(this.carb == 0 && this.prot == 0 && this.fat == 0) {
        return;
      }
      let carbToAdd = this.carb || 0;
      let protToAdd = this.prot || 0;
      let fatToAdd = this.fat || 0;
      carbToAdd = parseFloat(carbToAdd).toFixed(2);
      protToAdd = parseFloat(protToAdd).toFixed(2);
      fatToAdd = parseFloat(fatToAdd).toFixed(2);
      console.log(carbToAdd,protToAdd,fatToAdd);
      this.addMacros({carb:carbToAdd,prot:protToAdd,fat:fatToAdd});
      this.eraseMacros();
    },
    eraseMacros: function(e) {
      this.carb = this.prot = this.fat = null;
      document.getElementById('ds-macro-add-use-template-carb').value = document.getElementById('ds-macro-add-use-template-prot').value = document.getElementById('ds-macro-add-use-template-fat').value = null;
      this.useTemplate = false;
      this.template = null;
      this.templateWeight = null;
    },
    ...mapActions(['addMacros']),
  }
}
</script>

<style lang="scss" scoped>
// #ds-macro-add-total-kcal {
//   margin: 1rem auto;
// }
.md-layout-item {
  text-align: center;
  button {
    border-radius: 10rem;
    width: 80%;
  }
}
.md-input {
  text-align: center;
  width: 100%;
}
#ds-macro-add-switch-use-template {
  text-align: left;
  margin: 0.8rem auto;
}
</style>


