<template>
  <Navbar />
  <div v-if="$route.name != 'Home'" class="moved"></div>
  <div id="routerviev">
    <router-view />
  </div>
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

#routerviev {
  min-height: 80vh;
}

.moved {
  width:100vw;
  height:$height;
  background: #1c2123;
}

</style>
