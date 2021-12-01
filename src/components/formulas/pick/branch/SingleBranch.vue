<template>
  <router-link :to="$route.fullPath + '/' + branch.BranchName.toLowerCase()">
    <header>
      {{
        $t(
          'sciences.branches.' +
            branch.Science.ScienceName.toLowerCase() +
            '.' +
            branch.BranchName.toLowerCase() +
            '.name'
        )
      }}
    </header>
    <section>
      {{
        $t(
          'sciences.branches.' +
            branch.Science.ScienceName.toLowerCase() +
            '.' +
            branch.BranchName.toLowerCase() +
            '.desc'
        )
      }}
    </section>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Branch } from '@/types/sciences'

export default defineComponent({
  props: {
    branch: Object as () => Branch,
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

a {
  display: block;
  width: 900px;
  padding: 10px 20px;
  margin: 15px auto;
  max-width: 95vw;
  background: #d8d8d8;
  border-radius: 10px;
  cursor: pointer;
  font-size: 19px;
  @media (max-width: 1000px) {
    font-size: 17px;
  }
}

header {
  display: flex;
  align-items: center;
  font-weight: 500;
  margin: 5px 0;
  font-size: 25px;
  @media (max-width: 1000px) {
    font-size: 20px;
  }
}
</style>
