<template>
  <div class="ds-grid-body">
    <div class="md-layout md-alignment-top-center">
      <div class="md-layout-item md-xsmall-size-95 md-small-size-85 md-medium-size-75 md-large-size-65 md-xlarge-size-50">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ds-grid-body {
  margin-top: 0.5rem;
}
</style>
