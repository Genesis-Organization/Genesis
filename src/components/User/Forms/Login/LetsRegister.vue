<template>
  <p>
    {{ $t('user.forms.login.inputs.donthaveaccount.question') }}
    <router-link to="/register">
      {{ $t('user.forms.login.inputs.donthaveaccount.register') }}
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
