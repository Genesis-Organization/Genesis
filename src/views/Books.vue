<template>
  <Hero
    img="pages/books/hero.jpg"
    icon="navbar/books.svg"
    subtitle="Darmowe podręczniki dla każdego"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Hero from '@/components/Shared/Hero.vue'

import setMeta from '@/scripts/root/setMeta'

export default defineComponent({
  components: {
    Hero,
  },
  methods: {
    setMeta,
  },
  created() {
    setMeta(document, {
      title: this.$t('pages.books') + ' | Genesis',
    })
  },
})
</script>

<style lang="scss" scoped></style>
