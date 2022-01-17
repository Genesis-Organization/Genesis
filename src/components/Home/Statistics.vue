<template>
  <article>
    <div>
      <Text
        :header="$t('home.statistics.header')"
        :content="$t('home.statistics.desc')"
        :linkcont="$t('home.statistics.button')"
        link="statistics"
      />
    </div>
    <div class="imgcont">
      <img src="@/assets/pages/home/statistics.jpg" />
    </div>
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
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin: auto;
  padding: 20px;
  font-size: 19px;
  min-height: 18vh;
  max-width: 1500px;
  @media (max-width: 700px) {
    font-size: 16px;
    padding: 0;
  }
}

img {
  width: 500px;
  position: relative;
  @media (max-width: 700px) {
    width: 100vw;
  }
}

.imgcont {
  @media (min-width: 700px) {
    &:before {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      background-color: theme(main);
      top: 4%;
      left: 3%;
    }
  }
}
</style>
