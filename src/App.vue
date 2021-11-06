<template>
  <Navbar/>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from './components/navbar/Navbar.vue'

export default defineComponent({
  created() {
    document.title = 'Project Genesis'
  },
  components: {
    Navbar
  }
})
</script>

<style lang="scss">
@import './styles/index.scss';
</style>
