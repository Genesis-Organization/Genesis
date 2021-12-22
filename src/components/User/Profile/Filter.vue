<template>
  <header>
    <div class="filter">
      <div class="button" v-on:click="emitSection(0)">
        <ic icon="home" />
      </div>
      <div class="button" v-on:click="emitSection(1)">
        <ic icon="feather-alt" />
      </div>
      <div class="button" v-on:click="emitSection(2)">
        <ic icon="flask" />
      </div>
      <div class="button" v-on:click="emitSection(3)">
        <ic icon="blog" />
      </div>
      <div class="button" v-on:click="emitSection(4)">
        <ic icon="user" />
      </div>
    </div>
  </header>
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
  display: flex;
  flex-direction: column;
  align-items: center;
}
.filter {
  display: flex;
  border-radius: 10px;
  max-width: 100%;
  width: 700px;
  .button {
    display: flex;
    margin: 0 5px;
    height: 45px;
    flex-grow: 1;
    font-size: 27px;
    justify-content: center;
    align-items: center;
    color: theme(light);
    background-color: theme(dark);
    border-radius: 10px;
    cursor: pointer;
  }
}
</style>
