<template>
  <div class="pickcategory">{{ $t('formulas.pick.science') }}</div>
  <Filter @filterCategories="filterCategories" />
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
import axios from '@/config/axios'
import { AxiosResponse } from 'axios'
import { Science } from '@/types/sciences'
import Filter from './Filter.vue'
import ScienceItem from './ScienceItem.vue'

export default defineComponent({
  components: {
    Filter,
    ScienceItem,
  },
  data() {
    return {
      sciences: [] as Science[],
    }
  },
  mounted() {
    this.filterCategories(null)
  },
  methods: {
    filterCategories(category: number | null) {
      axios.get('/sciences/sciences').then((res: AxiosResponse) => {
        category == null
          ? (this.sciences = res.data)
          : (this.sciences = res.data.filter(
              (science: Science) => science.Group === category
            ))
      })
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

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
