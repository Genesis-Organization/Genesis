<template>
  <div class="pickcategory">{{ $t('formulas.pick.branch') }}</div>
  <div class="sciences">
    <SingleBranch
      v-for="branch in branches"
      :key="branch"
      :branch="branch"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from '@/config/axios'
import { AxiosResponse } from 'axios'
import { Branch } from '@/types/sciences'
import SingleBranch from './SingleBranch.vue'

export default defineComponent({
  components: {
    SingleBranch
  },
  data() {
    return {
      branches: [] as Branch[],
    }
  },
  mounted() {
    axios
      .get('/shared/sciences/sciences')
      .then((res: AxiosResponse) => {})
  }
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
</style>
