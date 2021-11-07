<template>
  <article>
    <div>
      <b>Genesis</b>
      to projekt non-profit, który ma na celu zwiększenie dostępności edukacji i
      utworzenie w pełni darmowych kompleksowych źródeł wiedzy. Przyświeca nam
      idea, że każdy niezależnie od pochodzenia i zamożności ma pełne prawo do
      nauki, a naszym celem jest zapewnienie wszystkim ludziom równości szans na
      godne życie.
      <div><router-link to="/informacje">Dowiedz się więcej</router-link></div>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss" scoped>
@import '../../styles/index.scss';
article {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  font-size: 25px;
  min-height: 25vh;
  @media (max-width: 700px) {
    font-size: 17px;
  }
}

div {
  max-width: 1000px;
}

b {
  font-weight: 800;
  text-transform: uppercase;
}

a {
  background: #0883a2;
  display: inline-block;
  margin: 10px 0;
  padding: 10px;
  font-size: 18px;
  border-radius: 5px;
  font-weight: 500;
  color: #e3e3e3;
}
</style>
