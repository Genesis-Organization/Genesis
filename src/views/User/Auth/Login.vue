<template>
  <div class="top"></div>
  <div class="container">
    <LoginForm />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoginForm from '@/components/User/Auth/Login/Form.vue'

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
  padding: 3vh 0;
}
</style>
