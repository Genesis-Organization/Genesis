<template>
  <header>
    <OfficialLogo />
    <div class="subtitle">
      {{ $t('main.slogan') }}
    </div>
    <div class="subtitle ornot">
      {{ $t('info.sure') }}
      <div class="pickme">
        <section>Początki</section>
        <section>Działalność</section>
        <section>Cel i plany</section>
        <section>Oprogramowanie</section>
        <section>Sponsorzy</section>
        <section>Autorzy</section>
        <section>Podziękowania</section>
        <section>Wesprzyj</section>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import OfficialLogo from '@/components/shared/OfficialLogo.vue'

export default defineComponent({
  components: {
    OfficialLogo,
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

header {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url('../../assets/pages/info/hero.jpg');
  background-size: cover;
  background-position: center;
  padding-top: $height;
  &:after {
    content: '';
    background: linear-gradient(theme(dark), transparent);
    width: 100vw;
    height: calc(2.5 * $height);
    position: absolute;
    top: 0;
  }
}

.subtitle {
  text-align: center;
  margin: 10px;
  padding: 10px;
  color: theme(light);
  font-weight: 500;
  background-color: #e3e3e3d0;
  color: theme(dark);
  border-radius: 10px;
  font-size: 32px;
  @media (max-width: 1000px) {
    font-size: 26px;
    max-width: 90vw;
  }
}

.ornot {
  background-color: #28353ad0;
  color: theme(light);
  font-size: 25px;
  width: 800px;
  max-width: 90vw;
  @media (max-width: 1000px) {
    font-size: 21px;
  }
}

.pickme {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 10px;
}

.pickme section {
  padding: 10px;
  background: theme(main_dark);
  margin: 5px;
  border-radius: 5px;
  font-size: 80%;
  cursor: pointer;
  flex-grow: 1;
  @media (max-width: 1000px) {
    padding: 8px;
  }
}
</style>
