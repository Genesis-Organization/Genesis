<template>
  <div class="mobile">
    <Logo class="logo" />
    <Hamburger @click="setSideMenu(true)" />
    <div class="site-menu" v-if="showSideMenu == true">
      <ul>
        <div class="close" @click="setSideMenu(false)"></div>
        <Logo class="logo" />
        <MProfile @close="setSideMenu(false)" />
        <NavItem
          v-for="subpage in subpages"
          :key="subpage"
          :subpage="subpage"
          @click="setSideMenu(false)"
        />
        <Locale :options="langs" />
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { subpages } from '@/data/navigation/subpages'
import { langs } from '@/data/navigation/langs'
import MProfile from './mobile/MProfile.vue'
import NavItem from './mobile/NavItem.vue'
import Hamburger from './mobile/Hamburger.vue'
import Logo from './Logo.vue'
import Locale from './mobile/Locale.vue'

export default defineComponent({
  components: {
    Hamburger,
    MProfile,
    NavItem,
    Logo,
    Locale,
  },
  data() {
    return {
      subpages,
      langs,
      showSideMenu: false,
    }
  },
  methods: {
    setSideMenu(val: boolean) {
      this.showSideMenu = val
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

.site-menu {
  display: flex;
  align-items: flex-start;
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 5vh 0;
  height: 100vh;
  width: 100vw;
  background: #1c2123ee;
  backdrop-filter: blur(10px);
  transition: 0.3s transform ease-in-out;
  overflow-x: auto;
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

a {
  display: flex;
  height: 100%;
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
  transition: 0.5s all;
  @media (min-width: 1000px) {
    display: none;
  }
  .logo {
    height: calc(0.7 * $height);
  }
}

.site-menu a.home.logo {
  margin: 10px auto 0 auto;
}

.close {
  width: 50px;
  height: 50px;
  position: absolute;
  top: 10px;
  right: 10px;
  &:before,
  &:after {
    content: '';
    width: 100%;
    height: 7.5px;
    background: #e3e3e3;
    position: absolute;
    display: block;
    top: 20px;
    left: 0;
    border-radius: 40%;
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
}
</style>
