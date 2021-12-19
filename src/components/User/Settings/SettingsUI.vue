<template>
  <div class="container">
    <Filter v-on:setSection="setSection" />
    <div v-if="currentSection == 0 || currentSection == 1">
      <Description />
      <ResearchInterests />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Filter from './Filter.vue'
import Description from './Profile/Description.vue'
import ResearchInterests from './Profile/ResearchInterests.vue'

export default defineComponent({
  data() {
    return {
      currentSection: 0,
    }
  },
  components: {
    Filter,
    Description,
    ResearchInterests,
  },
  methods: {
    setSection(number: number) {
      this.currentSection = number
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 10px;
}
</style>
