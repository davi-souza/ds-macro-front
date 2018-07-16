<template>
  <div class="ds-simple-app-bar">
    <md-app>
      <md-app-toolbar class="md-primary">

        <md-button v-if="links" class="md-icon-button" @click="menuVisible = !menuVisible">
          <md-icon>menu</md-icon>
        </md-button>

        <span v-if="title" class="md-title">{{ title }}</span>
        <span v-else class="md-title">DSM</span>

      </md-app-toolbar>
    </md-app>

    <md-drawer :md-active.sync="menuVisible">

      <md-toolbar class="md-primary" md-elevation="0">
        <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">{{ title }}</span>
      </md-toolbar>

      <md-list v-for="link in links" :key="link.name">
        <md-list-item v-bind:to="link.to">
          <md-icon>{{ link.icon }}</md-icon>
          <span class="md-list-item-text">{{ link.name }}</span>
        </md-list-item>
      </md-list>

    </md-drawer>

  </div>
</template>

<script>
export default {
  name: 'SimpleAppBar',
  props: ['title','links'],
  data: () => ({
    menuVisible: false,
  })
}
</script>

<style lang="scss" scoped>
.md-drawer {
  height: 100%;
}
</style>
