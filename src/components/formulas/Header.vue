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
    <router-link to="./" class="back">
      <ic icon="angle-double-left"></ic>
    </router-link>
  </header>
</template>

<script lang="ts">
import { Branch } from '@/types/sciences'
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    branch: Object as () => Branch,
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
header {
  margin: 10px;
  text-align: center;
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

.back {
  display: flex;
  justify-content: center;
  align-items: center;
  background: theme(dark);
  width: 50px;
  height: 50px;
  font-size: 30px;
  border-radius: 50%;
  position: absolute;
  left: 10%;
  top: 0;
  color: theme(light);
  transition: 0.2s;
  @media (min-width: 1000px) {
    transform: translateY(50%);
    * {
      transition: 0.2s;
    }
    &:hover {
      * {
        transform: translateX(-15%);
      }
      background-color: theme(main_dark);
    }
  }
  @media (max-width: 1000px) {
    top: -90%;
    background-color: theme(main);
  }
}
</style>
