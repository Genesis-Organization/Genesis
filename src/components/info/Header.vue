<template>
  <header>
    <OfficialLogo />
    <div class="subtitle">
      {{ $t('main.slogan') }}
    </div>
    <Buttons />
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Buttons from './Buttons.vue'
import OfficialLogo from '@/components/Shared/OfficialLogo.vue'

export default defineComponent({
  components: {
    OfficialLogo,
    Buttons,
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
</style>
