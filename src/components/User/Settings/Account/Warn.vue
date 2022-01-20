<template>
  <div class="warn">
    <div class="head">
      <ic icon="exclamation-triangle" />
      <div>{{ $t('settings.common.warn.header') }}</div>
    </div>
    <div class="body">{{ $t('settings.common.warn.cont') }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    critical: Boolean,
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

.warn {
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  background-color: #ffee0054;
  font-size: 17px;
  .head {
    font-size: 21px;
    svg {
      color: #daae00;
    }
  }
  .body {
    max-width: 600px;
  }
}
</style>
