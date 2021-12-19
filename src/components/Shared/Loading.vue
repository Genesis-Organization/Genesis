<template>
  <div class="container">
    <div>
      <div id="loader"></div>
      <div>{{ $t('loading.wait') }}...</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.container {
  display: flex;
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-image: linear-gradient(105deg, theme(dark), #161616);
  overflow: hidden;
  z-index: 12;
  justify-content: center;
  align-items: center;
  color: theme(light);
  font-size: 30px;
  div {
    text-align: center;
  }
}

$width: 6px;

#loader {
  display: block;
  position: relative;
  width: 20 * $width + 70px;
  height: 20 * $width + 70px;
  left: calc(50% - 10 * $width - 35px);
  margin-bottom: 10 * $width - 35px;
  border: $width solid transparent;
  border-top-color: #3498db;
  border-bottom-color: #3498db1e;
  border-radius: 50%;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
  &:before {
    content: '';
    position: absolute;
    top: $width;
    left: $width;
    right: $width;
    bottom: $width;
    border: $width solid transparent;
    border-top-color: #e73c3c;
    border-bottom-color: #e73c3c1e;
    border-radius: 50%;
    -webkit-animation: spin 3s linear infinite;
    animation: spin 3s linear infinite;
  }
  &:after {
    content: '';
    position: absolute;
    top: 3 * $width;
    left: 3 * $width;
    right: 3 * $width;
    bottom: 3 * $width;
    border: 3px solid transparent;
    border: $width solid transparent;
    border-top-color: #f9c922;
    border-bottom-color: #f9c9221e;
    border-radius: 50%;
    -webkit-animation: spin 1.5s linear infinite;
    animation: spin 1.5s linear infinite;
  }
}
</style>
