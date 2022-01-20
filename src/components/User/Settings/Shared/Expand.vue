<template>
  <button>
    <ic icon="angle-double-down" />
  </button>
</template>

<style lang="scss" scoped>
@import '@/styles/index.scss';

button {
  background-color: theme(main) !important;
  padding: 5px 10px !important;
  margin: 12px;
  font-size: 24px;
  width: 110px;
  border-radius: 10px;
  color: theme(light) !important;
  @media (max-width: 1000px) {
    width: 100px !important;
    font-size: 20px;
  }
}
</style>
