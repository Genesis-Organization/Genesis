<template>
  <Hero img="formulas/hero.jpg" subtitle="Wzory i tablice naukowe" />
  <Categories />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Hero from '../components/shared/Hero.vue'
import Categories from '../components/formulas/Categories.vue'

export default defineComponent({
  components: {
    Hero,
    Categories,
  },
})
</script>

<style lang="scss" scoped></style>
