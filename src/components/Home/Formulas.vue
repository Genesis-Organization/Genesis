<template>
  <article>
    <div class="imgcont">
      <img src="@/assets/pages/home/formulas.jpg" />
    </div>
    <div>
      <Text
        :header="$t('home.formulas.header')"
        :content="$t('home.formulas.desc')"
        :linkcont="$t('home.formulas.button')"
        link="formulas"
      />
      <Text
        :header="$t('home.books.header')"
        :content="$t('home.books.desc')"
        :linkcont="$t('home.books.button')"
        link="books"
      />
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
  flex-wrap: wrap-reverse;
  margin: auto;
  padding: 20px;
  font-size: 19px;
  min-height: 18vh;
  max-width: 1500px;
  @media (max-width: 700px) {
    padding: 0;
    font-size: 16px;
  }
}

img {
  width: 400px;
  position: relative;
  @media (max-width: 700px) {
    width: 100vw;
    padding-bottom: 10px;
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
      top: 2%;
      right: 3%;
    }
  }
}
</style>
