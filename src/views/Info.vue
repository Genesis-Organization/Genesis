<template>
  <Header />
  <Sections />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '@/components/info/Header.vue'
import Sections from '@/components/info/Sections.vue'

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
