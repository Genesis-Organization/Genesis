<template>
  <div class="desktop">
    <Logo />
    <section>
      <router-link to="/tablice">Tablice</router-link>
      <router-link to="/podreczniki">Podręczniki</router-link>
      <router-link to="/statystyki">Statystyki</router-link>
      <router-link to="/informacje">Informacje</router-link>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Logo from './Logo.vue'

export default defineComponent({
  components: {
    Logo,
  },
})
</script>

<style lang="scss" scoped>
@import '../../styles/index.scss';

div {
  width: 1300px;
  max-width:100vw;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius:10px;
  transition: .5s all;
}

section {
  display: flex;
}

section a {
  display: block;
  height: 100%;
  color: #e3e3e3;
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

.desktop {
  @media (max-width: 1000px) {
    display: none;
  }
}
</style>
