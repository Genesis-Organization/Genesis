<template>
  <Header />
  <About />
  <Formulas />
  <Statistics />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '@/components/home/Header.vue'
import About from '@/components/home/About.vue'
import Formulas from '@/components/home/Formulas.vue'
import Statistics from '@/components/home/Statistics.vue'

export default defineComponent({
  components: {
    Header,
    About,
    Formulas,
    Statistics,
  },
  mounted() {
    document.title = 'Home'
  },
})
</script>

<style lang="scss" scoped></style>
