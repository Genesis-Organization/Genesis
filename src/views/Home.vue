<template>
  <Header />
  <About />
  <Formulas />
  <Books />
  <Statistics />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '../components/home/Header.vue'
import About from '../components/home/About.vue'
import Formulas from '../components/home/Formulas.vue'
import Books from '../components/home/Books.vue'
import Statistics from '../components/home/Statistics.vue'

export default defineComponent({
  components: {
    Header,
    About,
    Formulas,
    Books,
    Statistics,
  },
})
</script>

<style lang="scss" scoped></style>
