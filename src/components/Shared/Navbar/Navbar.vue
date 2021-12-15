<template>
  <nav>
    <Desktop :class="{ changed: setNavColor }" />
    <Mobile :class="{ changed: setNavColor }" />
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { User } from '@/types/user'
import Desktop from './Desktop.vue'
import Mobile from './Mobile.vue'

export default defineComponent({
  components: {
    Desktop,
    Mobile,
  },
  data() {
    return {
      setNavColor: false,
      user: {} as User,
    }
  },
  methods: {
    scrollHandler() {
      if (window.scrollY > 20) {
        this.setNavColor = true
      } else {
        this.setNavColor = false
      }
    },
  },
  mounted() {
    document.addEventListener('scroll', () => this.scrollHandler())
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

nav {
  position: fixed;
  width: 100%;
  background: transparent;
  height: $height;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 9;
}

.changed {
  background: theme(dark);
  box-shadow: 0px 15px 15px rgba(0, 0, 0, 0.185);
}
</style>
