<template>
  <div class="pickcategory">Wybierz jedną z kategorii</div>
  <Filter />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Filter from './Filter.vue'

export default defineComponent({
  components: {
    Filter
  },
})
</script>

<style lang="scss" scoped>
@import '../../styles/index.scss';

.pickcategory {
  padding:10px;
  font-size:32px;
  font-weight: 500;
  text-align: center;
  @media (max-width:1000px) {
    font-size:24px;
  }
}
</style>
