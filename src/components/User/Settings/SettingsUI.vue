<template>
  <div class="container">
    <Menu @setSection="setSection" />
    <Section v-if="currentSection == 0">Work in Progress</Section>
    <Section v-if="currentSection == 1">
      <BasicInfo />
    </Section>
    <Section v-if="currentSection == 2">
      <Description />
      <ResearchInterests />
      <Education />
    </Section>
    <Section v-if="currentSection == 3">Work in Progress</Section>
    <Section v-if="currentSection == 4">Work in Progress</Section>
    <Section v-if="currentSection == 5">Work in Progress</Section>
    <Section v-if="currentSection == 6">Work in Progress</Section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Menu from './Menu.vue'
import Section from './Section.vue'

import BasicInfo from './Account/BasicInfo.vue'

import Description from './Profile/Description.vue'
import ResearchInterests from './Profile/ResearchInterests.vue'
import Education from './Profile/Education.vue'

export default defineComponent({
  data() {
    return {
      currentSection: 0,
    }
  },
  components: {
    Menu,
    Section,
    // ACCOUNT
    BasicInfo,
    // PROFILE
    Description,
    ResearchInterests,
    Education,
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
  flex-grow: 1;
}
</style>
