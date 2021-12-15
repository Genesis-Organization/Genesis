<template>
  <Banner v-if="user.bannerFileID" :banner="user.bannerFileID" />
  <div class="content">
    <UserHeader
      :username="`${$t('user.degrees.' + user.Degree + '.short')}
      ${user.Name} ${user.Surname}`"
      :login="user.Login"
      :avatar="user.avatarFileID"
    />
    <Description :description="user.description" :login="user.Login" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Banner from './Profile/Banner.vue'
import UserHeader from './Profile/UserHeader.vue'
import Description from './Profile/Description.vue'
import { User } from '@/types/user'

export default defineComponent({
  props: {
    user: Object as () => User,
  },
  components: {
    Banner,
    UserHeader,
    Description,
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.content {
  margin: 10px auto;
  width: 1000px;
  max-width: 95vw;
  background-color: #e3e3e3f3;
  color: theme(black);
  margin-top: 30vh;
  padding: 20px;
  border-radius: 20px;
}
</style>
