<template>
  <div class="mobile">
    <Logo class="logo" />
    <Hamburger />
    <div class="site-menu">
      <ul>
        <li><router-link to="/tablice">Tablice</router-link></li>
        <li><router-link to="/podreczniki">Podręczniki</router-link></li>
        <li><router-link to="/statystyki">Statystyki</router-link></li>
        <li><router-link to="/informacje">Informacje</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Hamburger from './Hamburger.vue'
import Logo from './Logo.vue'

export default defineComponent({
  components: {
    Hamburger,
    Logo,
  },
})
</script>

<style lang="scss" scoped>
@import '../../styles/index.scss';

.site-menu {
  display: flex;
  position: fixed;
  bottom: 0;
  right: 0;
  height: calc(100vh - $height);
  width: calc(200px + 20vw);
  background: #262626f7;
  transform: translateX(100%);
  transition: 0.3s transform ease-in-out;
}

ul {
  margin: 10px;
  padding: 0;
  width: 100%;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
}

li {
  background: #161616;
  margin-top: 10px;
  border-radius: 5px;
  font-size: 18px;
  flex-basis: 100%;
  height: 45px;
  box-shadow: inset 2px 2px 15px rgba(0, 42, 53, 0.245);
}

a {
  display: block;
  height: 100%;
}

.site-menu a {
  display: flex;
  padding: 10px;
  text-decoration: none;
  align-items: center;
  height: 100%;
  width: 100%;
  color: #fff;
}

button:focus ~ .site-menu,
.site-menu:hover {
  transform: translateX(0);
  @media (max-width: 600px) {
    box-shadow: -15px 0 15px rgba(0, 0, 0, 0.385);
  }
}

.mobile {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  @media (min-width: 1000px) {
    display: none;
  }
  .logo {
    height: calc(0.7 * $height);
  }
}
</style>
