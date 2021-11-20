<template>
  <div class="pickcategory">Wybierz jedną z kategorii</div>
  <Filter />
  <div class="sciences">
    <ScienceItem
      v-for="science in sciences"
      :key="science"
      :science="science"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Science } from '../../types/sciences'
import Filter from './Filter.vue'
import ScienceItem from './ScienceItem.vue'

export default defineComponent({
  components: {
    Filter,
    ScienceItem,
  },
  data() {
    return {
      sciences: [
        {
          ScienceName: 'Physics',
          ScienceID: 0,
          Group: 0,
        },
      ] as Science[],
    }
  },
})
</script>

<style lang="scss" scoped>
@import '../../styles/index.scss';

.pickcategory {
  padding: 10px;
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  @media (max-width: 1000px) {
    font-size: 24px;
  }
}

.sciences {
  width: 1000px;
  max-width: 90vw;
  margin: 10px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
