<template>
  <div
    class="hero"
    :style="{
      backgroundImage:
        'url(' +
        require('@/assets/pages/home/hero/' + index + '-min.jpg') +
        ')',
    }"
    :class="{ active: this.index == this.activeSlide }"
  ></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: ['index', 'activeSlide'],
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

.hero {
  position: absolute;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 2s;
}

.active {
  opacity: 1;
}
</style>
