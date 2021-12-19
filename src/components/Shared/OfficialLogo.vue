<template>
  <div>
    <div class="box">
      <img src="@/assets/icons/logo/logo.svg" />
      <div class="data">
        <div class="title">Genesis</div>
        <div class="subtitle">Foundation</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.box {
  display: flex;
  align-items: center;
  background-color: #e3e3e3d0;
  border-radius: 30px;
  padding: 10px;
  img {
    filter: brightness(0.15);
    height: 150px;
    @media (max-width: 1000px) {
      height: 90px;
    }
  }
}

.data {
  text-align: center;
  font-weight: 700;
  line-height: 42px;
  top: 10px;
  .title {
    font-size: 60px;
    text-transform: uppercase;
    @media (max-width: 1000px) {
      font-size: 46px;
      line-height: 27px;
    }
  }
  .subtitle {
    font-size: 37px;
    @media (max-width: 1000px) {
      font-size: 27px;
    }
  }
}
</style>
