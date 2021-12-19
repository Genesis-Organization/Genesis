<template>
  <header>{{ $t('pages.settings') }}</header>
  <div class="filter">
    <div class="button" v-on:click="emitSection(0)">
      <ic icon="home" />
    </div>
    <div class="button" v-on:click="emitSection(1)">
      <ic icon="user" />
    </div>
    <div class="button" v-on:click="emitSection(2)">
      <ic icon="shield-alt" />
    </div>
    <div class="button" v-on:click="emitSection(3)">
      <ic icon="lock" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  emits: ['setSection'],
  methods: {
    emitSection(number: number) {
      this.$emit('setSection', number)
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
header {
  margin: 15px;
  font-size: 30px;
}
.filter {
  display: flex;
  padding: 5px;
  border-radius: 10px;
  background: theme(gray);
  .button {
    display: flex;
    margin: 0 5px;
    width: 45px;
    height: 45px;
    font-size: 27px;
    justify-content: center;
    align-items: center;
    color: theme(light);
    background-color: theme(dark);
    border-radius: 10px;
  }
}
</style>
