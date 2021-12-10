<template>
  <div class="top"></div>
  <div class="container">
    <RegisterForm />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import RegisterForm from '@/components/users/forms/register/Form.vue'

export default defineComponent({
  components: {
    RegisterForm,
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.top {
  height: $height;
  background: theme(dark);
}
.container {
  display: flex;
  align-content: center;
  min-height: 80vh;
}
</style>
