<template>
  <div class="cont">
    <!-- <div class="que">O projekcie</div> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

.cont {
  display: flex;
  justify-content: center;
}

.que {
  display: inline-block;
  margin: 10px auto;
  text-align: center;
  text-transform: uppercase;
  padding: 15px;
  border-radius: 10px;
  margin: 10px;
  font-weight: 500;
  font-size: 30px;
  background: theme(dark);
  color: theme(light);
}
</style>
