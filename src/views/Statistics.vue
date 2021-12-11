<template>
  <Hero
    img="pages/statistics/hero.jpg"
    icon="navbar/statistics.svg"
    subtitle="Wszystkie statystyki w jednym miejscu"
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
    document.title = this.$t('pages.statistics') + ' | Genesis'
  },
})
</script>

<style lang="scss" scoped></style>
