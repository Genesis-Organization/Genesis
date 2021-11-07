<template>
  <nav :class="{ mainpagenav: $route.name === 'Home' }">
    <Desktop class="desktop" />
    <Mobile class="mobile" />
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Desktop from './Desktop.vue'
import Mobile from './Mobile.vue'

export default defineComponent({
  components: {
    Desktop,
    Mobile,
  },
})
</script>

<style lang="scss" scoped>
@import '../../styles/index.scss';

nav {
  position: sticky;
  width: 100%;
  background: #00647d;
  height: $height;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px 15px 15px rgba(0, 0, 0, 0.185);
  z-index: 1;
}

.mainpagenav {
  position: absolute;
  background: transparent;
  box-shadow: none;
  @media (max-width: 1000px) {
    justify-content: flex-end;
    top: 15px;
    right: 15px;
  }
}

.desktop {
  @media (max-width: 1000px) {
    display: none;
  }
}

.mobile {
  @media (min-width: 1000px) {
    display: none;
  }
}
</style>
