<template>
  <p>
    {{ $t('auth.register.haveaccount.question') }}
    <router-link to="/login">
      {{ $t('auth.register.haveaccount.login') }}
    </router-link>
  </p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
</style>
