<template>
  <div>{{science}}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Science } from '../../types/sciences'

export default defineComponent({
  props: {
    science: Object as () => Science
  }
})
</script>

<style lang="scss" scoped>
@import '../../styles/index.scss';
</style>
