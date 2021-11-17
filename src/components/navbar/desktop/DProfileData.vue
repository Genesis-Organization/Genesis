<template>
  <ul class="profiledata">
    <li class="username">{{ user.username() }}</li>
    <li class="login">@{{ user.login }}</li>
    <section class="icons">
      <router-link
        class="link_user"
        :to="'/user/' + user.login.toLowerCase()"
      ></router-link>
      <router-link class="link_settings" to="/a"></router-link>
      <router-link class="link_logout" to="/a"></router-link>
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
  background-color: $main;
  border-radius: 25%;
  background-size: 75%;
  background-repeat: no-repeat;
  background-position: center;
  transition: 0.2s;
  &:hover {
    filter: brightness(1.2);
  }
}

.link_user {
  background-image: url('../../../assets/icons/navbar/login.svg');
}

.link_settings {
  background-image: url('../../../assets/icons/navbar/settings.svg');
}

.link_logout {
  background-image: url('../../../assets/icons/navbar/logout.svg');
}
</style>
