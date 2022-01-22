<template>
  <article v-if="user && Object.keys(user).length > 0">
    <div>
      <div class="avatarcont">
        <section
          class="avatar"
          :style="{
            backgroundImage: 'url(/user/avatar/' + user.avatarFileID + '.png)',
          }"
        ></section>
      </div>
      <section class="shortdata">
        <div>
          <b class="username">{{ user.Name + ' ' + user.Surname }}</b>
          <i class="login">@{{ user.Login }}</i>
        </div>
      </section>
    </div>
    <router-link to="/logout" class="logout">
      {{ $t('auth.logout') }}
    </router-link>
  </article>
  <NavItem
    @click="this.$emit('close')"
    v-else
    :subpage="{
      text: 'Zaloguj się',
      link: 'login',
      image: 'login',
    }"
  />
  <div class="buttons" v-if="user">
    <router-link
      @click="this.$emit('close')"
      :to="'/users/' + user.Login"
      :style="{
        backgroundImage: `url(${require('@/assets/icons/navbar/login.svg')})`,
      }"
    ></router-link>
    <router-link
      @click="this.$emit('close')"
      to="/messages"
      :style="{
        backgroundImage: `url(${require('@/assets/icons/user/messages.svg')})`,
      }"
    ></router-link>
    <router-link
      @click="this.$emit('close')"
      to="/notifications"
      :style="{
        backgroundImage: `url(${require('@/assets/icons/user/bell.svg')})`,
      }"
    ></router-link>
    <router-link
      @click="this.$emit('close')"
      to="/settings"
      :style="{
        backgroundImage: `url(${require('@/assets/icons/user/settings.svg')})`,
      }"
    ></router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavItem from './NavItem.vue'
import { User } from '@/types/user'

export default defineComponent({
  emits: ['close'],
  components: {
    NavItem,
  },
  data() {
    return {
      user: this.$store.getters.getUser as User,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
article {
  width: 100%;
  padding: 5% 2%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

article > div {
  padding: 5px;
  display: flex;
}

.avatarcont {
  background: theme(light);
  padding: 5px;
  border-radius: 50%;
}

.avatar {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-position: center;
  background-size: cover;
}

.shortdata {
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
}

.username,
.login {
  display: block;
  color: #e3e3e3;
  font-size: 16.5px;
  padding: 2px;
  font-weight: 400;
}

.username {
  font-size: 22px;
  font-weight: 500;
}

.logout {
  color: theme(light);
  background: theme(main_dark);
  font-size: 18px;
  font-weight: 500;
  padding: 7px 10px;
  border-radius: 5px;
  position: absolute;
  right: 10px;
  bottom: 0;
}

.buttons {
  display: flex;
}

.buttons a {
  display: block;
  width: 50px;
  height: 50px;
  background-color: theme(main);
  margin: 5px 10px;
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
