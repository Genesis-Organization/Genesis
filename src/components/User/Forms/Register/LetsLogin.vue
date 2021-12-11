<template>
  <p>
    {{ $t('user.forms.register.inputs.haveaccount.question') }}
    <router-link to="/login">
      {{ $t('user.forms.register.inputs.haveaccount.login') }}
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
