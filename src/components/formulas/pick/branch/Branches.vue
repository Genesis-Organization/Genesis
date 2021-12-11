<template>
  <div class="pickcategory">
    <Back />
    {{ $t('formulas.pick.branch') }}
  </div>
  <div class="sciences">
    <SingleBranch v-for="branch in branches" :key="branch" :branch="branch" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { AxiosResponse } from 'axios'

import axios from '@/config/axios'
import { Branch, Science } from '@/types/sciences'
import SingleBranch from './SingleBranch.vue'
import Back from '../../../Shared/Back.vue'

export default defineComponent({
  props: {
    science: Object as () => Science,
  },
  components: {
    SingleBranch,
    Back,
  },
  data() {
    return {
      branches: [] as Branch[],
    }
  },
  mounted() {
    this.science &&
      axios
        .get(
          '/sciences/branchesobj?target=Science&filter=' +
            this.science.ScienceID
        )
        .then((res: AxiosResponse) => (this.branches = res.data))
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

.pickcategory {
  padding: 25px;
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  @media (max-width: 1000px) {
    padding: 10px;
    font-size: 24px;
  }
}
</style>
