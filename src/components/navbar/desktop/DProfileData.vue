<template>
  <ul class="profiledata">
    <li class="username">{{ user.username() }}</li>
    <li class="login">@{{ user.login }}</li>
    <section class="icons">
      <router-link :to="'/user/' + user.login.toLowerCase()"></router-link>
      <router-link to="/a"></router-link>
      <router-link to="/a"></router-link>
    </section>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { User } from '../../../types/user'

export default defineComponent({
  props: {
    user: Object as () => User,
  },
})
</script>

<style lang="scss" scoped>
@import '../../../styles/index.scss';

.profiledata {
  padding: 5px;
  color: #e3e3e3;
  list-style-type: none;
}

.username {
  font-size: 22.5px;
  font-weight: 500;
}

.login {
  font-size: 19px;
  font-weight: 300;
  font-style: italic;
}

.icons {
  display: flex;
  justify-content: space-between;
  padding: 7px 0;
}

.icons a {
  display: block;
  padding: 22px;
  margin: 5px;
  background: $main;
  border-radius: 25%;
}
</style>
