<template>
  <button>{{ $t('auth.inputs.confirm') }}</button>
</template>

<style lang="scss" scoped>
@import '@/styles/index.scss';
button {
  font-size: 18px;
  width: 180px !important;
  padding: 10px !important;
  background-color: theme(dark) !important;
  border-radius: 7px;
  color: theme(light) !important;
  @media (max-width: 1000px) {
    width: 120px !important;
    font-size: 16px;
  }
}
</style>
