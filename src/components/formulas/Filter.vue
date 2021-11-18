<template>
  <div class="filter">
    <div class="filter_option">Wszystkie</div>
    <div class="filter_option">Przyrodnicze</div>
    <div class="filter_option">Techniczne</div>
    <div class="filter_option">Społeczne</div>
    <div class="filter_option">Humanistyczne</div>
    <div class="filter_option">Pozostałe</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from '../../api/axios'
import { Group } from '../../types/sciences'

export default defineComponent({
  data() {
    return {
      sciences: {},
    }
  },
  mounted() {
    axios
      .get('/groups')
      .then((res) => (this.sciences = res.data.map((x: Group) => x.GroupName)))
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
    font-size: 17px;
    height: 40px;
  }
}
</style>
