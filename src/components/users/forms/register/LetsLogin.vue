<template>
  <p>
    {{ $t('user.forms.register.inputs.haveaccount.question') }}
    <a href="/users/login">
      {{ $t('user.forms.register.inputs.haveaccount.login') }}
    </a>
  </p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
</style>
