<template>
  <article>
    <Text
      header="Wiedza dostępna jak nigdy dotąd"
      content="Genesis to projekt non-profit, który ma na celu zwiększenie dostępności edukacji i
      utworzenie w pełni darmowych kompleksowych źródeł wiedzy. Przyświeca nam
      idea, że każdy niezależnie od pochodzenia i zamożności ma pełne prawo do
      nauki, a naszym celem jest zapewnienie wszystkim ludziom równości szans na
      godne życie."
      linkcont="Dowiedz się więcej"
      link="informacje"
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
@import '../../styles/index.scss';
article {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5vh 20px;
  margin-bottom: 2vh;
  font-size: 22px;
  background: #b4c1c7;
  @media (max-width: 700px) {
    font-size: 16px;
  }
}
</style>
