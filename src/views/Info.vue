<template>
  <Hero
    img="statistics/hero.jpg"
    icon="navbar/statistics.svg"
    subtitle="Czym jest projekt Genesis?"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Hero from '@/components/shared/Hero.vue'

import setMeta from '@/scripts/root/setMeta'

export default defineComponent({
  components: {
    Hero,
  },
  methods: {
    setMeta,
  },
  created() {
    document.title = this.$t('pages.info') + ' | Genesis'
  },
})
</script>

<style lang="scss" scoped></style>
