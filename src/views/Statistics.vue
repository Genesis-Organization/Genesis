<template>
  <Hero
    img="statistics/hero.jpg"
    icon="navbar/statistics.svg"
    subtitle="Wszystkie statystyki w jednym miejscu"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Hero from '@/components/shared/Hero.vue'

export default defineComponent({
  components: {
    Hero,
  },
})
</script>

<style lang="scss" scoped></style>
