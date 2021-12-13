<template>
  <div><b>...</b></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
div {
  display: flex;
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-image: linear-gradient(
    105deg,
    theme(main_dark),
    theme(aqua),
    theme(gold)
  );
  overflow: hidden;
  z-index: 12;
  justify-content: center;
  align-items: center;
  font-size: 200px;
}
</style>
