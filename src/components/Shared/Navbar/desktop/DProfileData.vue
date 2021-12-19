<template>
  <ul class="profiledata">
    <li class="username">{{ user.Name + ' ' + user.Surname }}</li>
    <li class="login">@{{ user.Login }}</li>
    <section class="icons">
      <router-link class="link_user" :to="'/users/' + user.Login"></router-link>
      <router-link class="link_messages" :to="'/messages'"></router-link>
      <router-link class="link_bell" :to="'/notifications'"></router-link>
      <router-link class="link_settings" to="/settings"></router-link>
      <router-link class="link_logout" to="/logout"></router-link>
    </section>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { User } from '@/types/user'

export default defineComponent({
  data() {
    return {
      user: this.$store.getters.getUser as User,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

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
  margin: 5px 3px;
  background-color: theme(black);
  border-radius: 25%;
  background-size: 65%;
  background-repeat: no-repeat;
  background-position: center;
  transition: 0.2s;
  &:hover {
    filter: brightness(1.2);
  }
}

.link_user {
  background-image: url('../../../../assets/icons/navbar/login.svg');
}

.link_messages {
  background-image: url('../../../../assets/icons/user/messages.svg');
}

.link_bell {
  background-image: url('../../../../assets/icons/user/bell.svg');
}

.link_settings {
  background-image: url('../../../../assets/icons/user/settings.svg');
}

.link_logout {
  background-image: url('../../../../assets/icons/user/logout.svg');
}
</style>
