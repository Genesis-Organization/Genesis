<template>
  <Hero img="formulas/hero.jpg" :subtitle="$t('formulas.index.hero')" />
  <Categories />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Hero from '@/components/shared/Hero.vue'
import Categories from '@/components/formulas/pick/category/Categories.vue'

export default defineComponent({
  components: {
    Hero,
    Categories,
  },
})
</script>

<style lang="scss" scoped></style>
