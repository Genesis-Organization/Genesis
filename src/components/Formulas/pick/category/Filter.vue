<template>
  <div class="filter">
    <div class="filter_option all" @click="filterCategories(null)">
      {{ $t('sciences.groups.all') }}
    </div>
    <div
      class="filter_option"
      v-for="group in groups"
      :key="group"
      @click="filterCategories(group.GroupID)"
    >
      {{ $t('sciences.groups.' + group.GroupName.toLowerCase()) }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { groups } from '@/data/formulas/sciences'

export default defineComponent({
  data() {
    return {
      groups,
    }
  },
  methods: {
    filterCategories(category: number | null) {
      this.$emit('filterCategories', category)
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

.filter {
  width: 1000px;
  max-width: 90vw;
  margin: 10px auto;
  display: flex;
  flex-wrap: wrap;
  border-radius: 10px;
  overflow: hidden;
}

.filter_option {
  height: 50px;
  padding: 10px;
  background: theme(main);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  transition: 0.3s all;
  cursor: pointer;
  color: #e3e3e3;
  font-size: 20px;
  font-weight: 500;
  &:hover {
    filter: brightness(1.2);
  }
  @media (max-width: 1000px) {
    font-size: 16px;
    height: 40px;
  }
}

.all {
  @media (max-width: 1000px) {
    background: theme(violet);
  }
}
</style>
