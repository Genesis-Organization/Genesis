<template>
  <Hamburger />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Hamburger from './Hamburger.vue'

export default defineComponent({
  components: {
    Hamburger
  }
})
</script>


<style lang="scss" scoped>
@import '../../styles/index.scss';
</style>
