<template>
  <Navbar />
  <router-view />
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from './components/navbar/Navbar.vue'
import Footer from './components/footer/Footer.vue'

export default defineComponent({
  created() {
    document.title = 'Project Genesis'
  },
  components: {
    Navbar,
    Footer,
  },
})
</script>

<style lang="scss">
@import './styles/index.scss';
</style>
