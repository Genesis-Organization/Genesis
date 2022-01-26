<template>
  <header>{{ $t('settings.common.basicinfo') }}</header>
  <Warn />
  <div class="inputs">
    <Name />
    <Email />
    <DateOfBirth />
    <Password />
    <div class="dangertext">
      <ic icon="biohazard" />
      Danger zone
    </div>
    <div class="danger">
      <Login />
      <Delete />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Warn from './Warn.vue'
import Name from './BasicInfo/Name.vue'
import Email from './BasicInfo/Email.vue'
import DateOfBirth from './BasicInfo/DateOfBirth.vue'
import Password from './BasicInfo/Password.vue'
import Login from './BasicInfo/Login.vue'
import Delete from './BasicInfo/Delete.vue'

export default defineComponent({
  components: {
    Warn,
    Name,
    Email,
    DateOfBirth,
    Password,
    Login,
    Delete,
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
  width: 720px;
  max-width: 90vw;
}

.dangertext {
  margin: 10px;
  text-align: left;
  font-size: 24px;
  font-weight: 600;
  color: #c52d2d;
}

.danger {
  padding: 15px 0;
  &:before {
    content: '';
    width: calc(100% + 40px);
    height: 100%;
    position: absolute;
    top: 0;
    left: -20px;
    border: 5px solid #c52d2d;
    border-radius: 20px;
  }
}
</style>
