<template>
  <article>f</article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss" scoped>
@import '../../styles/index.scss';
article {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  font-size: 25px;
  min-height: 25vh;
  background: red;
  @media (max-width: 700px) {
    font-size: 17px;
  }
}
</style>
