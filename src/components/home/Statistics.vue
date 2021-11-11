<template>
  <article>
    <div>
      <Text
        header="Wszystkie statystyki w jednym miejscu"
        content="Strona genesis zajmuje się również składowaniem wszelkich
        statystyk wykresów i danych, które mogą okazać sie pomocne dla każdego.
        W dalekiej przyszłości przy wsparciu wolontariuszy możliwe będzie
        też prowadzenie własnych badań."
        linkcont="Sprawdź tablice i wzory"
        link="statystyki"
      />
    </div>
    <div class="imgcont">
      <img src="../../assets/home/statistics.jpg" />
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
@import '../../styles/index.scss';
article {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin: auto;
  padding: 20px;
  font-size: 22px;
  min-height: 18vh;
  max-width: 1500px;
  @media (max-width: 700px) {
    font-size: 16px;
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
      background-color: $main;
      top: 4%;
      left: 3%;
    }
  }
}
</style>
