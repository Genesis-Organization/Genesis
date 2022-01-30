<template>
  <span v-if="user && Object.keys(user).length > 0">
    <article>
      <div
        class="avatarcont"
        :class="{ premium: user.isSponsor || user.isGenesisMember }"
      >
        <section
          class="avatar"
          :style="{
            backgroundImage: 'url(/user/avatar/' + user.avatarFileID + '.png)',
          }"
        />
      </div>
      <div class="username">
        {{ user.Name }}
      </div>
    </article>
    <div class="profile_hitbox">
      <section class="profile">
        <DProfileData />
      </section>
    </div>
  </span>
  <section class="login" v-else>
    <router-link to="/login">Zaloguj się</router-link>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { User } from '@/types/user'
import DProfileData from './DProfileData.vue'

export default defineComponent({
  data() {
    return {
      user: this.$store.getters.getUser as User,
    }
  },
  components: {
    DProfileData,
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
article {
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover ~ .profile_hitbox .profile {
    height: 150px;
    opacity: 1;
  }
}

.profile_hitbox {
  display: block;
  transform: translateX(-25%);
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 0;
  margin: 10px;
  &:hover .profile {
    height: 150px;
    opacity: 1;
  }
  width: 350px;
}

.profile {
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 90%;
  margin: 35px auto 0 auto;
  // height: 200px;
  height: 0;
  background: #28353ad0;
  backdrop-filter: blur(4px);
  border-radius: 20px;
  transition: 0.5s all;
}

.avatarcont {
  background-color: #e3e3e3;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px;
  border-radius: 50%;
  &.premium {
    background-image: url('../../../../assets/icons/logo/colors_premiumborder.png');
    background-size: cover;
  }
  &:before {
    content: '';
    background: theme(dark);
    border-radius: 50%;
    width: calc(100% - 5px);
    height: calc(100% - 5px);
    position: absolute;
    top: 2.5px;
    left: 2.5px;
  }
}

.avatar {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-position: center;
  background-size: cover;
}

.username {
  color: #e3e3e3;
  font-weight: 500;
  padding: 0 10px;
  font-size: 20px;
}

.login a {
  display: block;
  color: #e3e3e3;
  margin: 3px;
  padding: 7px;
  font-size: 22px;
  border-radius: 5px;
  transition: 0.2s all;
  &:hover {
    background: theme(main);
  }
}
</style>
