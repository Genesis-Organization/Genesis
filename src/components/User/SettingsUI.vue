<template>
  <div class="container">
    <Description />
    <ResearchInterests />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Description from './Settings/Description.vue'
import ResearchInterests from './Settings/ResearchInterests.vue'

export default defineComponent({
  components: {
    Description,
    ResearchInterests,
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
}
</style>
