<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Work } from '@/types/user'

export default defineComponent({
  props: {
    work: Array as () => Work[],
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
</style>
