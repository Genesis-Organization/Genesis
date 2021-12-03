<template>
  <div>{{ branch }}</div>
</template>

<script lang="ts">
import { Branch } from '@/types/sciences'
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    branch: Object as () => Branch,
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
div {
  background-color: gold;
}
</style>
