<template>
  <Header />
  <About />
  <Formulas />
  <Statistics />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Header from '@/components/Home/Header.vue'
import About from '@/components/Home/About.vue'
import Formulas from '@/components/Home/Formulas.vue'
import Statistics from '@/components/Home/Statistics.vue'

import setMeta from '@/scripts/root/setMeta'

export default defineComponent({
  components: {
    Header,
    About,
    Formulas,
    Statistics,
  },
  methods: {
    setMeta,
  },
  created() {
    setMeta(document, {
      title: 'Genesis',
    })
  },
})
</script>

<style lang="scss" scoped></style>
