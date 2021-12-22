<template>
  <div>
    <router-link
      to="/messages"
      v-if="currentUser"
      :style="{
        backgroundImage: `url(${require('@/assets/icons/user/messages.svg')})`,
      }"
    ></router-link>
    <router-link
      to="/notifications"
      v-if="currentUser"
      :style="{
        backgroundImage: `url(${require('@/assets/icons/user/bell.svg')})`,
      }"
    ></router-link>
    <router-link
      to="/settings"
      v-if="currentUser && login === currentUser.Login"
      :style="{
        backgroundImage: `url(${require('@/assets/icons/user/settings.svg')})`,
      }"
    ></router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    login: String,
  },
  data() {
    return {
      currentUser: this.$store.getters.getUser,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

div {
  display: flex;
  @media (max-width: 1000px) {
    justify-content: center;
    margin: auto;
  }
}

a {
  display: block;
  width: 50px;
  height: 50px;
  background-color: theme(main);
  margin: 10px;
  border-radius: 10px;
  background-size: 65%;
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: 1000px) {
    width: 40px;
    height: 40px;
  }
}
</style>
