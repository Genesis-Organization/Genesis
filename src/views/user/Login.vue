<template>
  <div class="top"></div>
  <div class="container">
    <LoginForm />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoginForm from '@/components/users/forms/login/Form.vue'

export default defineComponent({
  components: {
    LoginForm,
  },
  created() {
    document.title = this.$t('pages.login') + ' | Genesis'
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
