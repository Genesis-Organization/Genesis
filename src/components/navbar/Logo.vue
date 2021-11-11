<template>
  <router-link to="/" class="home">
    <img src="../../assets/logo.svg" />
    GENESIS
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss" scoped>
@import '../../styles/index.scss';

img {
  height: 85%;
  filter: invert(0.5) brightness(100);
}

.home {
  display: flex;
  align-items: center;
  margin: 10px;
  font-size: calc(20px + 0.85vw);
  font-weight: 700;
}

a {
  display: block;
  height: 100%;
  color: #e3e3e3 !important;
}
</style>
