<template>
  <p>
    {{ $t('auth.login.donthaveaccount.question') }}
    <router-link to="/register">
      {{ $t('auth.login.donthaveaccount.register') }}
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
