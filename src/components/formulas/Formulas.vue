<template>
  <Header :branch="branch" />
  <div class="test">
    <!-- {{ branch }}
    {{ Object.keys(branch) }} -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Branch } from '@/types/sciences'
import Header from './Header.vue'

export default defineComponent({
  props: {
    branch: Object as () => Branch,
  },
  components: {
    Header,
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

.test {
  background-color: gold;
}
</style>
