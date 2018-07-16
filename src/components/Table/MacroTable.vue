<template>
  <div class="ds-simple-table">
    <md-table md-card>

      <!-- <md-table-toolbar>
        <h1 class="md-title">Total macros</h1>
      </md-table-toolbar> -->


      <md-table-row>
        <md-table-head>carb (g)</md-table-head>
        <md-table-head>prot (g)</md-table-head>
        <md-table-head>fat (g)</md-table-head>
        <md-table-head>kcal</md-table-head>
      </md-table-row>

      <md-table-row>
        <md-table-cell>{{ parseFloat(macros.carb).toFixed(2) }}</md-table-cell>
        <md-table-cell>{{ parseFloat(macros.prot).toFixed(2) }}</md-table-cell>
        <md-table-cell>{{ parseFloat(macros.fat).toFixed(2) }}</md-table-cell>
        <md-table-cell>{{ (macros.carb*4 + macros.prot*4 + macros.fat*9).toFixed(2) }}</md-table-cell>
      </md-table-row>
      
    </md-table>
  </div>
</template>

<script>
export default {
  name: 'MacroTable',
  props: ['macros'],
}
</script>

<style lang="scss" scoped>
.md-card {
  border-radius: 0.5rem;
}
table {
  width: 100%;
}
.md-table-toolbar {
  text-align: center;
}
.md-table-row, .md-table-head, .md-table-cell {
  text-align: center;
}
</style>

