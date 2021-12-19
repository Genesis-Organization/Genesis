<template>
  <div class="brands">
    <img class="aard" src="@/assets/icons/logo/aard_full.png" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.brands {
  display: flex;
  align-items: center;
  opacity: 0.66;
  padding: 7px 15px;
  // height: 70px;
  // border: 3px solid theme(gray);
  // border-radius: 10px;
  * {
    margin-right: 10px;
  }
}
.aard {
  height: 35px;
}
</style>
