<template>
  <article>
    <Text
      :header="$t('home.main.header')"
      :content="$t('home.main.desc')"
      :linkcont="$t('home.main.button')"
      link="info"
    />
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Text from './common/Text.vue'

export default defineComponent({
  components: {
    Text,
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
article {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5vh 20px;
  margin-bottom: 2vh;
  font-size: 19px;
  background: #b4c1c7;
  @media (max-width: 700px) {
    font-size: 16px;
  }
}
</style>
