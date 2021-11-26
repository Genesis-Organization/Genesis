<template>
  <EasterEgg />
  <Navbar />
  <div id="routerviev">
    <router-view />
  </div>
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from '@/components/navbar/Navbar.vue'
import Footer from '@/components/footer/Footer.vue'
import EasterEgg from '@/components/EasterEgg.vue'

export default defineComponent({
  created() {
    const lang = localStorage.getItem('language')
    if (lang) {
      this.$i18n.locale = lang
    } else {
      this.$i18n.locale = 'en'
      document.documentElement.setAttribute('lang', 'en')
    }
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
  background: $dark;
}
</style>
