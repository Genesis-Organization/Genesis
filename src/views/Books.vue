<template>
  <Hero
    img="books/hero.jpg"
    icon="navbar/books.svg"
    subtitle="Darmowe podręczniki dla każdego"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Hero from '../components/shared/Hero.vue'

export default defineComponent({
  components: {
    Hero,
  },
})
</script>

<style lang="scss" scoped></style>
