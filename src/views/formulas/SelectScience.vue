<template>
  <Hero img="formulas/hero.jpg" :subtitle="$t('formulas.index.hero')" />
  <Categories />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Hero from '@/components/shared/Hero.vue'
import Categories from '@/components/formulas/pick/category/Categories.vue'

import setMeta from '@/scripts/root/setMeta'

export default defineComponent({
  components: {
    Hero,
    Categories,
  },
  methods: {
    setMeta,
  },
  mounted() {
    document.title = this.$t('pages.formulas') + ' | Genesis'
  },
})
</script>

<style lang="scss" scoped></style>
