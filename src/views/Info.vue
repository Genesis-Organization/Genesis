<template>
  <Background />
  <Header />
  <About />
  <span></span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Background from '@/components/info/Background.vue'
import Header from '@/components/info/Header.vue'
import About from '@/components/info/About.vue'

export default defineComponent({
  components: {
    Background,
    Header,
    About,
  },
  created() {
    document.title = this.$t('pages.info') + ' | Genesis'
  },
})
</script>

<style lang="scss" scoped>
span {
  display: block;
  min-height: 300vh;
}
</style>
