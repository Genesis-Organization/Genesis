<template>
  <EasterEgg />
  <Navbar />
  <main id="routerviev">
    <router-view />
  </main>
  <Footer />
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
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    // console.log(require('>>/locales/pl'), require('@/locales/pl'))
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

#routerviev {
  min-height: 80vh;
}

.moved {
  width: 100vw;
  height: $height;
  background: theme(dark);
}
</style>
