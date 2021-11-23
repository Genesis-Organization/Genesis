<template>
  <a
    :href="media.Link"
    :style="{
      backgroundImage:
        'url(' +
        require('@/assets/icons/navbar/footer/' +
          media.Name.toLowerCase() +
          '.svg') +
        ')',
    }"
  ></a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: ['media'],
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
a {
  display: block;
  padding: 22px;
  margin: 5px;
  background: $main;
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: center;
  color: white;
  border-radius: 5px;
  transition: 0.2s;
  &:hover {
    filter: brightness(1.2);
  }
}
</style>
