<template>
  <div class="bannercontainer">
    <div class="bannercont">
      <div
        class="bannerblur"
        :style="{ backgroundImage: `url(/user/banner/${banner}.png)` }"
      ></div>
      <div
        class="bannerimage"
        :style="{ backgroundImage: `url(/user/banner/${banner}.png)` }"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    banner: String,
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.bannercontainer {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: 35vh;
  overflow: hidden;
  @media (min-width: 1000px) {
    height: 50vh;
  }
  .bannercont {
    margin: 0 auto;
    width: 100%;
    max-width: 1500px;
    height: 100%;
    z-index: 0;
    background-color: #16161620;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 0 0 100px 100px;
    overflow: hidden;
    @media (max-width: 1000px) {
      border-radius: 0 0;
    }
  }
  .bannerblur {
    width: 120%;
    height: 120%;
    left: -10%;
    top: -10%;
    z-index: -1;
    position: absolute;
    background-size: 100% 100%;
    filter: blur(20px) brightness(0.7);
  }
  .bannerimage {
    margin: 0 auto;
    width: 1500px;
    max-width: 100%;
    height: 100%;
    z-index: 1;
    background-color: #16161620;
    background-repeat: no-repeat;
    background-size: auto 100%;
    background-position: center;
  }
}
</style>
