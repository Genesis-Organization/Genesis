<template>
  <main class="genesis-app">
    <EasterEgg />
    <Navbar />
    <router-view />
    <Footer />
    <!-- <Privacy /> -->
    <notifications position="bottom left" width="400px" />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Navbar from '@/components/Shared/Navbar/Navbar.vue'
import Footer from '@/components/Shared/Footer/Footer.vue'
import EasterEgg from '@/components/EasterEgg.vue'

import setLang from '@/scripts/root/setLang'

export default defineComponent({
  methods: {
    setLang,
  },
  created() {
    setLang(this)
  },
  components: {
    Navbar,
    Footer,
    EasterEgg,
  },
})
</script>

<style lang="scss">
@import '@/styles/index.scss';

.genesis-app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}

.moved {
  width: 100vw;
  height: $height;
  background: theme(dark);
}
</style>
