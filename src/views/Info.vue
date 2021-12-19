<template>
  <Header />
  <Sections />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '@/components/Info/Header.vue'
import Sections from '@/components/Info/Sections.vue'

export default defineComponent({
  components: {
    Header,
    Sections,
  },
  created() {
    document.title = this.$t('pages.info') + ' | Genesis'
  },
})
</script>

<style lang="scss" scoped></style>
