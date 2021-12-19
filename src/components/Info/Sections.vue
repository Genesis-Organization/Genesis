<template>
  <div>
    <!-- <Beginnings />
    <Activity />
    <GoalsAndPlans /> -->
    <Software />
    <!-- <Contact />
    <Donate />
    <Sponsors />
    <Thanks />
    <Authors />
    <Join /> -->
  </div>
</template>

<script lang="ts">
/* eslint-disable */
import { defineComponent } from 'vue'
import Beginnings from './sections/Beginnings.vue'
import Activity from './sections/Activity.vue'
import GoalsAndPlans from './sections/GoalsAndPlans.vue'
import Software from './sections/Software.vue'
import Sponsors from './sections/Sponsors.vue'
import Authors from './sections/Authors.vue'
import Thanks from './sections/Thanks.vue'
import Donate from './sections/Donate.vue'
import Join from './sections/Join.vue'
import Contact from './sections/Contact.vue'

export default defineComponent({
  components: {
    // Beginnings,
    // Activity,
    // GoalsAndPlans,
    Software,
    // Sponsors,
    // Authors,
    // Thanks,
    // Donate,
    // Join,
    // Contact,
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
div {
  min-height: 40vh;
}
</style>
