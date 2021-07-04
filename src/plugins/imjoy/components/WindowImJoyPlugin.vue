<template>
  <WindowApp :window="props.window">
    <div class="imjoy-container" :id="`imjoy-${props.window.uniqueID}`" />
  </WindowApp>
</template>

<script setup>
import {defineProps} from "vue";

const props = defineProps({
  window: Object
})
</script>

<style scoped lang="scss">
.imjoy-container {
  width: 100%;
  height: 100%;
}
</style>