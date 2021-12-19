<template>
  <header>
    <div class="title">
      {{
        $t(
          'sciences.branches.' +
            branch.Science.ScienceName.toLowerCase() +
            '.' +
            branch.BranchName.toLowerCase() +
            '.name'
        )
      }}
    </div>
    <div class="science">
      {{ $t('sciences.sciences.' + branch.Science.ScienceName.toLowerCase()) }}
      <img
        :src="
          require('@/assets/icons/sciences/' +
            branch.Science.ScienceName.toLowerCase() +
            '.svg')
        "
      />
    </div>
    <div class="line"></div>
    <Back />
  </header>
</template>

<script lang="ts">
import { Branch } from '@/types/sciences'
import { defineComponent } from 'vue'
import Back from '../Shared/Back.vue'

export default defineComponent({
  props: {
    branch: Object as () => Branch,
  },
  components: {
    Back,
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
header {
  margin: 10px;
  text-align: center;
  padding-bottom: 10px;
  .title {
    font-weight: 600;
    font-size: 38px;
    text-transform: uppercase;
    color: theme(black);
    @media (max-width: 700px) {
      font-size: 30px;
    }
  }
  .science {
    display: inline-flex;
    align-items: center;
    font-size: 27px;
    font-weight: 500;
    @media (max-width: 700px) {
      font-size: 22px;
    }
  }
  img {
    filter: brightness(0.15);
    margin: 0 10px;
    height: 50px;
    @media (max-width: 700px) {
      height: 40px;
    }
  }
  .line {
    background-color: theme(black);
    margin: 10px auto;
    width: 500px;
    max-width: 80vw;
    height: 5px;
    border-radius: 4px;
    @media (max-width: 700px) {
      margin: 5px auto;
    }
  }
}
</style>
