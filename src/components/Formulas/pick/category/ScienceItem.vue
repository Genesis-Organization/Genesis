<template>
  <router-link
    :style="{
      backgroundImage:
        'url(' +
        require('@/assets/pages/formulas/sciences/thumbnails/' +
          science.ScienceName.toLowerCase() +
          '.jpg') +
        ')',
    }"
    :to="{
      name: 'FormulasBranch',
      params: { id: science.ScienceName.toLowerCase() },
    }"
  >
    <div>
      <span>
        <img
          :src="
            require('@/assets/icons/sciences/' +
              science.ScienceName.toLowerCase() +
              '.svg')
          "
        />
        {{ $t('sciences.sciences.' + science.ScienceName.toLowerCase()) }}
      </span>
    </div>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Science } from '@/types/sciences'

export default defineComponent({
  props: {
    science: Object as () => Science,
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
a {
  background-size: cover;
  background-position: center;
  margin: 10px;
  border-radius: 10px;
  width: 300px;
  height: 187.5px;
  transition: 0.25s all;
  overflow: hidden;
  &:hover {
    transform: scale(1.05);
    cursor: pointer;
    div {
      height: 100%;
      background: #00647db0;
      span {
        img {
          height: 50px;
        }
      }
    }
  }
  div {
    background: #28353ab0;
    position: absolute;
    color: #e3e3e3;
    height: 25%;
    width: 100%;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    font-size: 20px;
    font-weight: 600;
    backdrop-filter: blur(5px);
    transition: 0.3s all;
  }
}

img {
  display: block;
  height: 0px;
  margin: auto;
}
</style>
