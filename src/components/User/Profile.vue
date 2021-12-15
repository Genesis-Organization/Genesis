<template>
  <Banner v-if="user.bannerFileID" :banner="user.bannerFileID" />
  <div class="content">
    <div class="header">
      <img />
      <div class="username">
        {{ user.Name + ' ' + user.Surname }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Banner from './Profile/Banner.vue'
import { User } from '@/types/user'

export default defineComponent({
  props: {
    user: Object as () => User,
  },
  components: {
    Banner,
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.content {
  margin: 10px auto;
  width: 1000px;
  max-width: 95vw;
  background-color: #e3e3e3e3;
  margin-top: 30vh;
  padding: 20px;
  border-radius: 20px;
}
</style>
