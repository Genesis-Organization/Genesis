<template>
  <Hero img="pages/formulas/hero.jpg" :subtitle="$t('formulas.index.hero')" />
  <Categories />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Hero from '@/components/Shared/Hero.vue'
import Categories from '@/components/Formulas/pick/category/Categories.vue'

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
