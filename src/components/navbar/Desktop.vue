<template>
  <div>
    <router-link to="/" class="home">
      <img src="../../assets/logo.svg" />
      GENESIS
    </router-link>
    <section>
      <router-link to="/tablice">Tablice</router-link>
      <router-link to="/tablice">Podręczniki</router-link>
      <router-link to="/tablice">Statystyki</router-link>
      <router-link to="/tablice">Informacje</router-link>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss" scoped>
@import '../../styles/index.scss';

div {
  width: 1000px;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

section {
  display: flex;
}

img {
  height: 100%;
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
  color: #e3e3e3;
}

section a {
  margin: 10px;
  font-size: 22px;
  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 110%;
    height: 3.5px;
    left: -5%;
    bottom: -3.5px;
    background: #e3e3e3;
    border-radius: 1px;
    transition: all 0.25s;
    opacity: 0;
  }
  &:hover:after {
    opacity: 1;
  }
}
</style>
