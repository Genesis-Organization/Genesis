<template>
  <div class="desktop">
    <Logo />
    <section>
      <router-link
        :key="subpage"
        v-for="subpage in subpages"
        :to="'/' + subpage.link"
        >{{ $t('navigation.navbar.subpages.' + subpage.corename) }}</router-link
      >
    </section>
    <DProfile />
    <Locale :options="langs" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DProfile from './desktop/DProfile.vue'
import Logo from './Logo.vue'
import Locale from './desktop/Locale.vue'
import { subpages } from '@/data/navigation/subpages'
import { langs } from '@/data/navigation/langs'

export default defineComponent({
  data() {
    return {
      subpages,
      langs,
    }
  },
  components: {
    Logo,
    DProfile,
    Locale,
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

.desktop {
  width: 1300px;
  max-width: 100vw;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 10px;
  transition: 0.5s all;
}

section {
  display: flex;
}

section a {
  display: block;
  height: 100%;
  color: #e3e3e3;
  margin: 3px;
  padding: 7px;
  font-size: 22px;
  border-radius: 5px;
  transition: 0.2s all;
  &:hover {
    background: theme(main);
  }
}

.desktop {
  @media (max-width: 1000px) {
    display: none;
  }
}
</style>
