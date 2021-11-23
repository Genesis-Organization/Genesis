<template>
  <div class="slideshow">
    <Hero
      v-for="(slide, index) in 8"
      :key="index"
      :index="index"
      :activeSlide="activeSlide"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Hero from './Hero.vue'

export default defineComponent({
  components: {
    Hero,
  },
  data() {
    return {
      activeSlide: Math.floor(Math.random() * 7),
    }
  },
  methods: {
    changeSlide() {
      if (this.activeSlide < 7) {
        this.activeSlide++
      } else {
        this.activeSlide = 0
      }
    },
  },
  mounted() {
    window.setInterval(() => {
      this.changeSlide()
    }, 10000)
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

.slideshow {
  width: 100%;
  height: 100%;
}
</style>
