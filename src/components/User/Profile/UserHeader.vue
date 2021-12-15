<template>
  <div class="header">
    <div
      class="avatar"
      v-if="avatar"
      :style="{ backgroundImage: `url(/user/avatar/${avatar}.png)` }"
    ></div>
    <div class="data">
      <div class="username">{{ username }}</div>
      <div class="login">{{ `@${login}` }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    username: String,
    login: String,
    avatar: String,
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.header {
  display: flex;
  align-items: center;
  @media (max-width: 1000px) {
    justify-content: center;
  }
}
.avatar {
  width: 150px;
  height: 150px;
  background-size: cover;
  background-position: center;
  margin: 10px;
  border-radius: 50%;
  @media (max-width: 1000px) {
    margin: 5px;
    width: 110px;
    height: 110px;
  }
}
.username {
  font-size: 26px;
  margin: 5px 0;
  font-weight: 600;
  @media (max-width: 1000px) {
    font-size: 22px;
    margin: 0;
  }
}
.login {
  font-size: 18px;
  @media (max-width: 1000px) {
    font-size: 16px;
  }
}
</style>
