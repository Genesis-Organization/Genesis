<template>
  <Header />
  <About />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '@/components/info/Header.vue'
import About from '@/components/info/About.vue'

export default defineComponent({
  components: {
    Header,
    About,
  },
  created() {
    document.title = this.$t('pages.info') + ' | Genesis'
  },
})
</script>

<style lang="scss" scoped></style>
