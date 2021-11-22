<template>
  <div class="filter">
    <div class="filter_option all">{{ $t('sciences.groups.all') }}</div>
    <div class="filter_option" v-for="group in sciences" :key="group">
      {{ $t('sciences.groups.' + group.GroupName.toLowerCase()) }}
    </div>
  </div>
</template>

<script lang="ts">
import { AxiosResponse } from 'axios'
import axios from '../../config/axios'
import { defineComponent } from 'vue'
import { Group } from '../../types/sciences'

export default defineComponent({
  data() {
    return {
      sciences: {} as Group[],
    }
  },
  mounted() {
    axios
      .get('/shared/sciences/groups')
      .then((res: AxiosResponse) => (this.sciences = res.data))
  },
})
</script>

<style lang="scss" scoped>
@import '../../styles/index.scss';

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
  background: $main;
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
    background: $secondary;
  }
}
</style>
