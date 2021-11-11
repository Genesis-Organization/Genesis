<template>
  <article>
    <div class="imgcont">
      <img src="../../assets/home/formulas.jpg" />
    </div>
    <div>
      <Text
        header="Cała wiedza w pigułce"
        content="Na stronie Genesis dostępne są najważniejsze wzory i tablice z
        takich przedmiotów jak fizyka, biologia czy matematyka. Wszystkie
        podzielone są na dziedziny nauk oraz 3 poziomy trudności, aby każdy mógł z
        nich korzystać. Naukę ułatwiają również podpisy mówiące z jakim wzorem
        mamy do czynienia oraz czym są wielkości, które go budują."
        linkcont="Sprawdź tablice i wzory"
        link="tablice"
      />
      <Text
        header="Darmowe podręczniki dla każdego"
        content="Docelowo projekt Genesis ma w planach zapewnić darmową edukację
        każdemu człowiekowi na świecie. W tym celu w przyszłości powstaną darmowe
        podręczniki wolne od licencji tłumaczone na jak najwięcej języków świata.
        Obecnie podręczniki akademickie są najczęściej drogie, a studenci zmuszeni
        do kupowania dziesiątek różnych ksiązek na każdy temat. Zadaniem naszego
        projektu jest nie tylko utworzenie książek darmowych, ale również na tyle
        kompleksowych, że nie będą potrzebować żadnych innych."
        linkcont="Zobacz listę podręczników"
        link="podreczniki"
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
@import '../../styles/index.scss';
article {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap-reverse;
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
  width: 400px;
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
      top: 2%;
      right: 3%;
    }
  }
}
</style>
