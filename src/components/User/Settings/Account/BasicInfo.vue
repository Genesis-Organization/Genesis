<template>
  <header>{{ $t('settings.common.basicinfo') }}</header>
  <Warn />
  <div class="inputs">
    <Name />
    <Email />
    <DateOfBirth />
    <Password />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Warn from './Warn.vue'
import Name from './BasicInfo/Name.vue'
import Email from './BasicInfo/Email.vue'
import DateOfBirth from './BasicInfo/DateOfBirth.vue'
import Password from './BasicInfo/Password.vue'

export default defineComponent({
  components: {
    Warn,
    Name,
    Email,
    DateOfBirth,
    Password,
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
header {
  font-size: 22px;
  margin-top: 10px;
}
.inputs {
  display: flex;
  flex-direction: column;
  width: 750px;
  max-width: 90vw;
}
</style>
